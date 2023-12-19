import React from "react";
import SuccessMessage from "../SuccessMessage";
import ErrorMessage from "../ErrorMessage";
import styles from "./ErrorBoundary.module.css";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      result:""
    };
  }

  static getDerivedStateFromError(error) {
    console.log("error in");
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("LotterySection Error:", error, errorInfo);
    this.setState({
      hasError: true,
      result:error.message
    })
  }



  render() {
   
      if( this.state.hasError){
        return (
        <div className={styles.lotterySectionWrapper}>
          <div className={styles.message}>
            <>
              {this.state.result === "success" && <SuccessMessage />}
              {this.state.result === "error" && <ErrorMessage />}
            </>
        </div>
        </div>
          )
      }
      return this.props.children

  }
}

export default ErrorBoundary;
