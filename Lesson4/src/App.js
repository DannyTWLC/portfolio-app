import React, { Component } from "react";
import styled from "styled-components";
import "./App.css";
import Menu from "./components/Menu/Menu";

const Container = styled.div`
  text-align: center;
`;

// stateful component
// stateless component
const MyComponent = props => {
  return (
    <h1>
      {props.text}
      {props.children}
    </h1>
  );
};

class App extends Component {
  render() {
    // text-align:center
    return (
      <Container>
        <div className="intro" style={{ backgroundColor: "red" }}>
          <MyComponent text={"ABC"} />
          <MyComponent text={"DEF"} />
          <MyComponent text={"hahaha"}>여기</MyComponent>
          Danny TWLC
          <Menu />
        </div>
      </Container>
    );
  }
}

export default App;
