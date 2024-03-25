import React from 'react';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1 className="not-found-heading">404 Error</h1>
        <p className="not-found-text">Page Not Found</p>
      </div>
      <div className="not-found-image">
        <img src="/images/error.png" alt="Error Illustration" />
      </div>
    </div>
  );
};

export default NotFound;
