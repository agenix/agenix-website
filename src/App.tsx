import React from 'react';
import logo from './images/agenix.svg';

const App: React.FC = () => {
  return (

    <div className="home-grid">
      <header className="center-logo">
          <img src={logo} alt="Agenix Logo" />
      </header>
      <footer className="home-footer">
        © 2019 Agenix LLC
      </footer>
    </div>

  );
}

export default App;
