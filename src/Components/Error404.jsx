import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../Css/Error404.css'; 
const Error404 = () => {
  const navigate = useNavigate(); 

  const handleGoBack = () => {
    navigate(-1); 
  };

  return (
    <div className="error-container">
      <div className="error-box">
        <h1 className="error-title">404</h1>
        <p className="error-message">Oops! Page not found.</p>
        <p className="error-description">The page you are looking for does not exist.</p>
        <p className="error-description">You have entered the wrong URL.</p>
        <p>If you have any query, contact Nouman Khan.</p>
        <button onClick={handleGoBack} className="error-link">Go back</button>
      </div>
    </div>
  );
};

export default Error404;
