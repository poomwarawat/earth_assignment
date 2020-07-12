import React, { Component } from "react";
import "./App.css";
// import DisplayUser from "./components/DisplayUser";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // input: "",
      // todoArr: [],
      r: 0,
      g: 0,
      b: 0,
    };
  }
  // handleChange = (e) => {
  //   const value = e.target.value;
  //   this.setState({
  //     input: value,
  //   });
  // };
  // handleClick = () => {
  //   this.setState({
  //     todoArr: this.state.todoArr.concat(`${this.state.input}`),
  //     input: "",
  //   });
  // };
  // handleDelete = (e) => {
  //   let index = e.currentTarget.id;
  //   console.log(index);
  //   this.setState({
  //     todoArr: this.state.todoArr.splice(index, 1),
  //   });
  // };
  handleRandom = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    this.setState({
      r: r,
      g: g,
      b: b,
    });
  };
  render() {
    const box = {
      backgroundColor: `rgba(${this.state.r}, ${this.state.g}, ${this.state.b})`,
      width: "300px",
      height: "300px",
      border: "5px solid black",
    };
    return (
      <div className="p-4">
        <div className="container">
          <div style={box}></div>
          <button className="btn btn-primary mt-2" onClick={this.handleRandom}>
            Random
          </button>
          {/* <h1>Todo list</h1>
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
            })} */}
        </div>
      </div>
    );
  }
}

export default App;
