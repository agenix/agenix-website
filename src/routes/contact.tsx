import React, {Suspense, useEffect} from 'react';
const FeedbackForm = React.lazy(() => import('../components/feedback-form'));

const Home: React.FC = () => {
  useEffect(() => {
    document.title = 'Agenix - Contact';
  }, [])
  return (
    <div className = "page">
      <div className = "home-grid">
        <header className = "left-logo">
          <img src="./images/agenix.svg" alt = "Agenix Logo" />
          <p>Provocateurs & Purveyors of Decentralised Web Applications</p>
        </header>
        <section>  
          <div className = "content-container">
          <Suspense fallback = {
            <div>Loading...</div>
          }>
            <FeedbackForm publicKey = "EOS6tZcV1M4vHYn6EkDbVHkK1dziyswnJAHidaR47NRdYDL6JtJD4" />
          </Suspense>
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
