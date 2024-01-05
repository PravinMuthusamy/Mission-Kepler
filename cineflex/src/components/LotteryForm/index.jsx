import React, { useState } from 'react';
import styles from './LotteryForm.module.css';
import { LOTTERY } from '../../constants';

const LotteryForm = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [error,setError]=useState();
  if(error)throw new Error(error)

  const handleTryLuck = () => {
    if (mobileNumber.length === 10) {
      
      const isEven = parseInt(mobileNumber, 10) % 2 === 0;
      if(isEven){
        setError("success")
      }else{
        setError("error")
      }
    }
  };

  const handleInputChange = (e) => {
    setMobileNumber(e.target.value);
  };

  const inputStyle = {
    border: (mobileNumber.length > 0 && mobileNumber.length < 10)? '1px solid red' : 'initial',
  };
const disableButton = {
  cursor : (mobileNumber.length === 10)? "" : 'none',
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
