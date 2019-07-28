import React, {useEffect} from 'react';


const NotFound: React.FC = () => {
  useEffect(() => {
    document.title = 'Agenix - 404 Not Found';
  }, [])
  
  return (    

    <div className="home-grid page">
      <div className="logo">
        <img src="./images/agenix.svg" alt = "Agenix Logo" />
        <h2 className="strapline">404 Page Not Found</h2>
      </div>
      <footer className="footer">
        © 2019 Agenix LLC
      </footer>
    </div>

  );
}

export default NotFound;
