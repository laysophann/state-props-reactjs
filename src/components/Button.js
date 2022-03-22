import React, { Component } from "react";

class Button extends Component {
  render() {
    return (
      <button onClick={() => this.props.onUpdateCount()}>
        Click {this.props.count}
      </button>
    );
  }
}
export default Button;
