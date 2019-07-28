import React, {useEffect, useState} from 'react';
import ecc from 'eosjs-ecc'
import ScatterJS from 'scatterjs-core';
import ScatterEOS from 'scatterjs-plugin-eosjs';
import Eos from 'eosjs';

type props = {
  publicKey: string,
}

const FeedbackForm: React.FC<props> = ({publicKey}) => {

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
    tempPublicKey: '',
    tempPrivateKey: '',
    ipfsHash: '',
    publicKey,
  });

  useEffect(() => {
    const genTempKey = async () => {
      const tempPrivateKey = await ecc.randomKey();
      const tempPublicKey = await ecc.privateToPublic(tempPrivateKey);       
      setFormState((formState) => ({...formState, tempPublicKey, tempPrivateKey}))
    };
    genTempKey();
  }, [])

  const changeFormState = (event: any) => {
    const {name, value} = event.target; 
    setFormState({...formState, [name]: value})
  }


  const arrayBufferToHex = (uint8Array: any) => {
    const view = new Uint8Array(uint8Array);
    let result = ''
    let value
    for (let i = 0; i < view.length; i++) { value = view[i].toString(16); result += (value.length === 1 ? '0' + value : value)};
    return result
  }

  const api = (msg: any) => {
    // fetch('https://api.github.com/gists', {
    //   method: 'post',
    //   body: JSON.stringify(msg)
    // }).then(function(response) {
    //   return response.json();
    // }).then(function(data) {
    //   return data;
    // });
    return '798sd7fs987df9s7f89s7f'
  }

  const connectScatter = () => {
    ScatterJS.plugins( new ScatterEOS() );
    const network = {
      blockchain:'eos',
      protocol:'https',
      host:'nodes.get-scatter.com',
      port:443,
      chainId:'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906'
    }
    ScatterJS.scatter.connect('My-App').then((connected: any) => {
      if(!connected) return false;
      const scatter = ScatterJS.scatter;
      const requiredFields = { accounts:[network] };
      scatter.getIdentity(requiredFields).then(() => {
          const account = scatter.identity.accounts.find((x: any) => x.blockchain === 'eos');
          const eosOptions = { expireInSeconds:60 };
          const eos = scatter.eos(network, Eos, eosOptions);
          const transactionOptions = { authorization:[`${account.name}@${account.authority}`] };
          const contractAccount = 'mytestaccount';
          const functionName = 'reg';
          const args = {owner: 'me', securitycode: 'sd8f08fd'}
          eos.transaction([contractAccount], (sendTx: any) => {
            sendTx[contractAccount][functionName](args, transactionOptions)
          })
          .then((trx: any) => {
              console.log(trx);
          }).catch((error: any) => {
              console.error(error);
          });
      }).catch((error: any) => {
          console.error(error);
      });
  });
  }

  const submitForm = () => {
    connectScatter();
    const encryptMessage = async () => {
      const toPublicKey = publicKey
      const fromTempPublicKey = formState.tempPublicKey;
      const fromTempPrivateKey = formState.tempPrivateKey;
      const messageToEncrypt = `${formState.name}, ${formState.email}, ${formState.message}`
      const encryptedMessage = await ecc.Aes.encrypt(fromTempPrivateKey, toPublicKey, messageToEncrypt);
      const body = arrayBufferToHex(encryptedMessage.message)
      const nonce = encryptedMessage.nonce
      const checksum = encryptedMessage.checksum
      let msg: {[key: string]: any} = {};
      msg.to = toPublicKey;
      msg.from = fromTempPublicKey;
      msg.body = body;
      msg.nonce = nonce;
      msg.checksum = checksum;
      const ipfsHash =  await api(JSON.stringify(msg));
      setFormState((formState) => ({...formState, ipfsHash}))
    }
    encryptMessage();
  }

  return (
    <div className="feedback-form">
      <div>
        <input type="text" name="name" value={formState.name} onChange={changeFormState} /><br/>
        <input type="text" name="email" value={formState.email} onChange={changeFormState}/><br/>
        <input type="text" name="message" value={formState.message} onChange={changeFormState}/><br/>
        <button onClick={submitForm}>Submit</button>
      </div>
    </div>
  );
}

export default FeedbackForm;
