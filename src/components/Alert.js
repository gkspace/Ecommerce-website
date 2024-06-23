import React from 'react';
import './Alert.css';

const Alert = ({ message, visible }) => {
  return (
    visible && (
      <div className="alert">
        {message}
      </div>
    )
  );
};

export default Alert;
