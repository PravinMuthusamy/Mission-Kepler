import React from 'react';
import { LOTTERY } from '../../constants';

const ErrorMessage = () => {
  return (
    <div>
      <h2>{LOTTERY.unluckyMessage}</h2>
    </div>
  );
};

export default ErrorMessage;
