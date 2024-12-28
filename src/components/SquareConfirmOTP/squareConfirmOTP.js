import React from "react";
import './squareConfirmOTP.scss'
class SquareConfirmOTP extends React.Component {
  state = {
    value: "",
  };
  handleChange = (event) => {
    const inputValue = event.target.value;

    if (inputValue.length === 1 && this.props.nextRef && this.props.nextRef.current) {
        this.props.nextRef.current.focus();
        console.log("Next Ref:", this.props.nextRef?.current);

    }
};
  render() {
    return (
      <div className="square">
        <input className="inputOTP" maxLength="1" onChange={(event) => this.handleChange(event)} />
      </div>
    );
  }
}
export default SquareConfirmOTP;