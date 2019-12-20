import React, { Component } from "react";
import { Button } from "reactstrap";
class SizeSetting extends Component {
  constructor(props) {
    super(props);
    this.changeSize = this.changeSize.bind(this);
  }
  changeSize = value => {
    console.log(value);
    this.props.onchangeSize(value);
  };
  render() {
    return (
      <>
        <div className="panel panel-warning">
          <div className="panel-heading">
            <h3 className="panel-title">Font size: {this.props.fontSize}px</h3>
          </div>
          <div className="pane-body">
            <Button color="primary" onClick={() => this.changeSize(-2)}>
              Giảm
            </Button>
            <Button color="secondary" className="fix_khoang_cach" onClick={() => this.changeSize(2)}>
              Tăng
            </Button>
          </div>
        </div>
      </>
    );
  }
}

export default SizeSetting;
