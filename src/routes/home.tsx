import React from 'react';
import TitleText from '../components/title-text'
import PartnerIcon from '../components/partner-icon'

const Home: React.FC = () => {
  return (

    <div className="home">
      <div className="home-grid">
        
        <header className="left-logo">
            <div className="top-logo"></div>
            <p>Provocateurs & Purveyors of Decentralised Web Applications</p>
        </header>
        <section>
          
          <div className="content-container">
            <TitleText 
              preTitle="What do we do exactly?" 
              title="At our core" 
              text="We design, develop and create applications that use decentralized technology to enable freedom, transparency and security for businesses and organizations."
            />
            <TitleText 
              preTitle="working together" 
              title="Strategic Partnerships" 
              text="Creating a better world requires teamwork, partnerships, and collaboration to help us accomplish our mission."
            />

            <div className="client-container">
              <PartnerIcon name="worbli" description="EOS Sister Chain"/>
              <PartnerIcon name="transledger" description="Cypto-Fiat Gateway"/>
              <PartnerIcon name="blocksmith" description="Development"/>
              <PartnerIcon name="tokenoro" description="Gold Preferred Security"/>
              <PartnerIcon name="sandemas" description="Business Development"/>
              <PartnerIcon name="dfuse" description="API Development"/>
            </div>
            
            <TitleText 
              preTitle="Reach out"
              title="We dont bite!"
              text="If you have a question, an application, or an idea and want to discover more about the opportunities afforded from using decentalized applications"
            />
            <div className="contact-icons">
              <a href="email:hello@agenix.io" target="_blank" rel="noopener noreferrer"><img src="./images/email.svg" alt="email us"></img></a>
              <a href="http://www.github.com/agenix/" target="_blank" rel="noopener noreferrer"><img src="./images/github.svg" alt="join us on github"></img></a>
           </div> 

          </div>
        </section>
        <footer className="home-footer">
          © 2019 Agenix LLC.
        </footer>

      </div>
    </div>

  );
}

export default Home;
