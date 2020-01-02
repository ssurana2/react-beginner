import React, { Component } from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import "./style.css";

interface AppProps {}
interface AppState {
  value: number;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
  }

  keyDownHandler = (e: { keyCode: number }) => {
    if (this.state.value != null) {
      if (e.keyCode === 38) {
        this.setState({ value: this.state.value + 1 });
      }
      if (e.keyCode === 40) {
        this.setState({ value: this.state.value - 1 });
      }
    }
  };

  componentDidMount() {
    document.addEventListener("keydown", this.keyDownHandler);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.keyDownHandler);
  }

  render() {
    return (
      <div>
        <h1>Counter is: {this.state.value} </h1>
        <p>Start editing to see some magic happen :)</p>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
