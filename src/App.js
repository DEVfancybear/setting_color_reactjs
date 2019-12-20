import React, { Component } from "react";
import "./App.css";

import Reset from "./components/Reset";
import Result from "./components/Result";
import ColorPicker from "./components/ColorPicker";
import SizeSetting from "./components/SizeSetting";
class App extends Component {
  //lưu trữ giá trị ban đầu
  constructor(props) {
    super(props);
    this.state = {
      //  màu và font mặc định đã được chỉ định
      color: "red",
      fontSize: 12
    };
    this.onSetColor = this.onSetColor.bind(this);
    this.onSettingDefault = this.onSettingDefault.bind(this);
  }
  onSetColor = params => {
    // console.log(params);
    this.setState({
      color: params
    });
  };
  onchangeSize = value => {
    let { fontSize } = this.state;
    if (fontSize + value >= 8 && fontSize + value <= 36) {
      this.setState({
        fontSize: fontSize + value
      });
    }
  };
  onSettingDefault = value => {
    console.log(value);
    if (value) {
      this.setState({
        color: "red",
        fontSize: 12
      });
    }
  };
  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <ColorPicker
              color={this.state.color}
              onReciveColor={this.onSetColor}
            />
            <div className="col-xl-6 col-md-6 col-sm-6">
              <SizeSetting
                fontSize={this.state.fontSize}
                onchangeSize={this.onchangeSize}
              />
              <Reset onSettingDefault={this.onSettingDefault} />
            </div>
            <Result
              normalColor={this.state.color}
              color={this.state.color}
              fontSizeRe={this.state.fontSize}
            />
          </div>
        </div>
      </>
    );
  }
}

export default App;
