import React from 'react';
import logo from './images/agenix.png';
import './App.scss';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="Agenix Logo" />
      </header>
    </div>
  );
}

export default App;
