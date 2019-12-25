import React, { Component } from "react";
class Result extends Component {
  render() {
    let setStyle = {
      color: this.props.color,
      borderColor: this.props.color,
      fontSize: this.props.sizeSet
    };
    return (
      <>
        <div className="col-xl-12 col-md-12 col-sm-12">
          <p>
            Color: {this.props.normalColor} - Font size: {this.props.sizeSet}
            px
          </p>
          {/* thay đổi style khi được click */}
          <div id="content" style={setStyle}>
            Nội dung setting
          </div>
        </div>
      </>
    );
  }
}

export default Result;
