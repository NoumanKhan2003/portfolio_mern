import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import Error404Css from '../Css/Error404.module.css'; 
const Error404 = () => {
  const navigate = useNavigate(); 

  const handleGoBack = () => {
    navigate(-1); 
  };

  return (
    <div className={Error404Css.errorContainer}>
      <div className={Error404Css.errorBox}>
        <h1 className={Error404Css.errorTitle}>404</h1>
        <p className={Error404Css.errorMessage}>Oops! Page not found.</p>
        <p className={Error404Css.errorDescription}>The page you are looking for does not exist.</p>
        <p className={Error404Css.errorDescription}>You have entered the wrong URL.</p>
        <p>If you have any query, contact Nouman Khan.</p>
        <button onClick={handleGoBack} className={Error404Css.errorLink}>Go back</button>
      </div>
    </div>
  );
};

export default Error404;
