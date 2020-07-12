import React, { Component } from "react";
import "./App.css";
// import DisplayUser from "./components/DisplayUser";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      todoArr: [],
    };
  }
  handleChange = (e) => {
    const value = e.target.value;
    this.setState({
      input: value,
    });
  };
  handleClick = () => {
    this.setState({
      todoArr: this.state.todoArr.concat(`${this.state.input}`),
      input: "",
    });
  };
  handleDelete = (e) => {
    let index = e.currentTarget.id;
    console.log(index);
    this.setState({
      todoArr: this.state.todoArr.splice(index, 1),
    });
  };
  render() {
    return (
      <div className="p-4">
        <div className="container">
          <h1>Todo list</h1>
          {console.log(this.state.todoArr)}
          <p>Comment your todo</p>
          <input
            className="form-control"
            placeholder="input here"
            onChange={this.handleChange}
          />
          <button className="btn btn-primary mt-2" onClick={this.handleClick}>
            send
          </button>
          {this.state.todoArr.length > 0 &&
            this.state.todoArr.map((data, index) => {
              return (
                <div key={index} className="alert alert-primary mt-1">
                  {data}{" "}
                  <span
                    id={index + 1}
                    className="float-right"
                    onClick={this.handleDelete}
                    style={{ color: "red" }}
                  >
                    DELETE
                  </span>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default App;
