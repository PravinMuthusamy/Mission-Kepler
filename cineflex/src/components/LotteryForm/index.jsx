import React, { useState } from 'react';
import styles from './LotteryForm.module.css';
import { LOTTERY } from '../../constants';

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
const disableButton = {
  disabled : (mobileNumber.length < 10)? 'true' : 'false',
};
  return (
    <div className={styles.lotteryFormWrapper}>
        {LOTTERY.message}
      <label>
        <input type="text" placeholder={LOTTERY.placeholder} value={mobileNumber} style={inputStyle} onChange={handleInputChange} />
      </label>
      <button onClick={handleTryLuck} style={disableButton}>{LOTTERY.button}</button>
    </div>
  );
};

export default LotteryForm;
