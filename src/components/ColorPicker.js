import React, { Component } from "react";
class ColorPicker extends Component {
  constructor(props) {
    super(props);
    // tạo state chứa các màu
    this.state = {
      color: ["green", "red", "blue", "#ccc"]
    };
    this.setActiveColor = this.setActiveColor.bind(this);
  }
  showColor = color => {
    console.log(this.props.color);
    return {
      backgroundColor: color
    };
  };
  setActiveColor = color => {
    //bắt sự kiện khi click vào các cô chứa màu
    console.log(color);
    //trả dữ liệu ra  ngoài thằng cha bằng 1 cái props và nhận 1 cái function
    this.props.onReciveColor(color);
  };
  render() {
    let elementColors = this.state.color.map((color, index) => {
      // đổ màu
      return (
        <span
          // nếu props.color mà bằng vs this.state.color thì cho nó 1 class active
          className={this.props.color === color ? "active" : ""}
          key={index}
          style={this.showColor(color)}
          onClick={() => this.setActiveColor(color)}
        ></span>
      );
    });
    return (
      <>
        <div className="col-xl-6 col-md-6 col-sm-6">
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h3>Color Picker</h3>
            </div>
            <div className="panel-body">{elementColors}</div>
          </div>
        </div>
      </>
    );
  }
}

export default ColorPicker;
