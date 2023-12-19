import React from "react";
import LotteryForm from "../LotteryForm";
import SuccessMessage from "../SuccessMessage";
import ErrorMessage from "../ErrorMessage";
import styles from "./LotterySection.module.css";

class LotterySection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      showMessage: false, 
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("LotterySection Error:", error, errorInfo);
  }

  handleTryLuck = (mobileNumber) => {
    // Validate the length of the mobile number
    if (mobileNumber.length === 10) {
      const isEven = parseInt(mobileNumber, 10) % 2 === 0;
      this.setState({
        hasError: false,
        showMessage: true, // Set flag to true when result is calculated
        result: isEven ? "success" : "error",
      });
    } else {
      // Reset the result and hide message when the length becomes less than 10
      this.setState({
        hasError: false,
        showMessage: false,
        result: null,
      });
    }
  };

  render() {
    return (
      <div className={styles.lotterySectionWrapper}>
        {(!this.state.hasError) ?
          (<LotteryForm onTryLuck={this.handleTryLuck} />)
        :
        (<div className={styles.message}>
          {this.state.showMessage && (
            <>
              {this.state.result === "success" && <SuccessMessage />}
              {this.state.result === "error" && <ErrorMessage />}
            </>
          )}
        </div>)}
      </div>
    );
  }
}

export default LotterySection;
