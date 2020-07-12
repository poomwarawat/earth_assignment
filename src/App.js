import React, { Component } from "react";
import "./App.css";
// import DisplayUser from "./components/DisplayUser";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      lastname: "",
      phone: "",
      address: "",
      click: false,
    };
  }
  handleChange = (e) => {
    const name = e.target.id;
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  };
  handleClick = () => {
    this.setState({
      click: true,
    });
  };
  render() {
    return (
      <div className="p-4">
        <div className="container">
          <div>
            <h1>name : </h1>
            <input
              id="name"
              className="form-control"
              onChange={this.handleChange}
            />
            <h1>lastname : </h1>
            <input
              id="lastname"
              className="form-control"
              onChange={this.handleChange}
            />
            <h1>phone : </h1>
            <input
              id="phone"
              className="form-control"
              onChange={this.handleChange}
            />
            <h1>address : </h1>
            <input
              id="address"
              className="form-control"
              onChange={this.handleChange}
            />
          </div>
          <button className="btn btn-primary mt-2" onClick={this.handleClick}>
            Register
          </button>
          <br />
          {this.state.click === true && JSON.stringify(this.state)}
        </div>
      </div>
    );
  }
}

export default App;
