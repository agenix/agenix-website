import React, {useEffect} from 'react';
// import logo from './images/agenix.svg';

const NotFound: React.FC = () => {
  useEffect(() => {document.title = 'something...'}, [])
  
  return (    

    <div className="home-grid page">
      <div className="logo">
        {/* <h1><a href="/"><img src={logo} alt="Agenix Logo" /></a></h1> */}
        <h2 className="strapline">404 Page Not Found</h2>
      </div>
      <footer className="footer">
        © 2019 Agenix LLC
      </footer>
    </div>

  );
}

export default NotFound;
