import React, { useState } from 'react';
import styles from './LotteryForm.module.css';

const LotteryForm = ({ onTryLuck }) => {
  const [mobileNumber, setMobileNumber] = useState('');

  const handleInputChange = (e) => {
    setMobileNumber(e.target.value);
  };

  const handleTryLuck = () => {
    if (mobileNumber.length === 10) {
        onTryLuck(mobileNumber);
      }
  };
  const inputStyle = {
    border: (mobileNumber.length > 0 && mobileNumber.length < 10)? '1px solid red' : 'initial',
  };
  return (
    <div className={styles.lotteryFormWrapper}>
        Your Mobile Number can win you exciting prizes
      <label>
        <input type="text" placeholder='Enter Mobile Number' value={mobileNumber} style={inputStyle} onChange={handleInputChange} />
      </label>
      <button onClick={handleTryLuck}>I'm Feeling Lucky</button>
    </div>
  );
};

export default LotteryForm;
