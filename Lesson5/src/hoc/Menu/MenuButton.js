import React from "react";
import styled from "styled-components";
import { Icon } from "semantic-ui-react";

const ButtonStyle = styled.div`
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  transition: all 0.3s;
  position: relative;
  border: 2px solid #000;
  color: #000;
  &:hover {
    transform: scale(1.1);
  }
  span {
    position: absolute;
    bottom: 5%;
    left: 35%;
  }
`;

class MenuButton extends React.Component {
  render() {
    return (
      <ButtonStyle>
        <Icon
          name="user"
          style={{ fontSize: "50px", transform: "translateY(30%)" }}
        />
        <span>Intro</span>
      </ButtonStyle>
    );
  }
}

export default MenuButton;
