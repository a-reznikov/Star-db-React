import React from 'react';

import './error-indicator.css';
import errorIcon from './error-icon.png'

const ErrorIndicator = () => {
  return (
    <div class="error-indicator">
      <img src={errorIcon} alt='error icon' />
      <h2 className='title font-weight-bold text-warning'>BOOM!</h2>
      <p className='text-warning'>
        something has gone terribly wrong
      </p>
      <p className='text-warning'>
        (but we already sent droids to fix it)
      </p>
    </div>);
};

export default ErrorIndicator;