import React, { Component } from "react";
import { Button } from "reactstrap";
class Reset extends Component {
  constructor(props) {
    super(props);
    this.onResetDefault = this.onResetDefault.bind(this);
  }
  onResetDefault = () => {
    this.props.onSettingDefault(true);
  };
  render() {
    return (
      <>
        <Button className="item_bot" color="info" onClick={this.onResetDefault}>
          Reset
        </Button>
      </>
    );
  }
}

export default Reset;
