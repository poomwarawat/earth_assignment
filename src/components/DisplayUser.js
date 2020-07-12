import React, { Component } from "react";

class DisplayUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lowerCase: "",
    };
  }
  componentWillReceiveProps() {
    this.setState({
      lowerCase: this.props.data.toLowerCase(),
    });
  }
  render() {
    return (
      <div>
        <h1>Input text : {this.state.lowerCase}</h1>
      </div>
    );
  }
}

export default DisplayUser;
