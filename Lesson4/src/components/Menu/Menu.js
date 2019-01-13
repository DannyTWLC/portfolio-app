import React, { Component } from "react";

class Menu extends Component {
  state = {
    text: "I am a text"
  };
  render() {
    return (
      <div>
        <button onClick={() => this.setState({ text: "Button1" })}>
          Button1
        </button>
        <button onClick={() => this.setState({ text: "Button2" })}>
          Button2
        </button>
        <br />
        <h1>{this.state.text}</h1>
      </div>
    );
  }
}

export default Menu;
