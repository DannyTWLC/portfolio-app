import React from "react";
import styled from "styled-components";
import MenuButton from "./MenuButton";

const Menu = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  bottom: 0;
  width: 560px;
  background-color: #efefef;
  height: 120px;
  left: 50%;
  padding: 15px 30px;
  padding-bottom: 10px;
  transform: translateX(-50%);
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
`;

class Menubar extends React.Component {
  render() {
    return (
      <Menu>
        <MenuButton />
        <MenuButton />
        <MenuButton />
        <MenuButton />
      </Menu>
    );
  }
}

export default Menubar;
