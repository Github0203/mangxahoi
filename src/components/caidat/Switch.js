import ReactDOM from "react-dom";
import React, { Component } from "react";
import Switch from "react-switch";

class Switche extends Component {
  constructor() {
    super();
    this.state = { checked: false };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(checked) {
    this.setState({ checked });
  }

  render() {
    return (
      <label htmlFor="normal-switch">
        <Switch
          checked={this.state.checked}
          onChange={this.handleChange}
          onColor="#4fff33"
          offColor="#2693e6"
          handleDiameter={30}
          uncheckedIcon={false}
          checkedIcon={false}
          boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
          activeBoxShadow="0px 0px 1px 7px rgba(0, 0, 0, 0.2)"
          height={20}
          width={60}
          id="material-switch"
        />
      </label>
    );
  }
}

export default Switche