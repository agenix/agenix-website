import React from 'react';
import TitleText from '../components/titleText'
import PartnerIcon from '../components/partnerIcon'

const App: React.FC = () => {
  return (

    <div className="background">
      <div className="home-grid">
        
        <header className="left-logo">
            <img src="./images/agenix.svg" alt="Agenix Logo" />
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
              title="Clients = Partners" 
              text="We work close with our clients. By getting them involved in creative  workshops and brainstorming sessions. We learn their business in order to uncover possibilities. Enabling us to tackle any problem from a unique point of view"
            />

            <div className="client-container">
              <PartnerIcon name="worbli" description="EOS Sister Chain"/>
              <PartnerIcon name="Transledger" description="Cypto-Fiat Gateway"/>
              <PartnerIcon name="Blocksmith" description="Development"/>
              <PartnerIcon name="TokenOro" description="Gold Preferred Security"/>
              <PartnerIcon name="Strongblock" description="Business Development"/>
              <PartnerIcon name="SanDemas" description="Business Development"/>
              <PartnerIcon name="DeFuse" description="API Development"/>
            </div>
            
            <TitleText 
              preTitle="Reach out"
              title="We dont bite!"
              text="If you have a question, an application, or an idea and want to discover more about the opportunities afforded from using decentalized applications"
            />
            <div className="contact-icons">
              <a href="email:hello@agenix.io" target="_blank" rel="noopener noreferrer"><img src="./images/email.svg" alt="email us"></img></a>
              <a href="http://wwww.t.agenix.io" target="_blank" rel="noopener noreferrer"><img src="./images/telegram.svg" alt="find us on telegram"></img></a>
              <a href="http://www.github.com/agenix/" target="_blank" rel="noopener noreferrer"><img src="./images/github.svg" alt="join us on github"></img></a>
            </div>

          </div>
        </section>
        <footer className="home-footer">
          © 2019 Agenix LLC
        </footer>

      </div>
    </div>

  );
}

export default App;
