import React from "react";
import styled from "styled-components";
import { Icon } from "semantic-ui-react";

const ButtonStyle = styled.div`
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  transition: all 0.3s;
  position: relative;
  border: 2px solid ${props => props.color};
  color: ${props => props.color};
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
  span {
    position: absolute;
    bottom: 2%;
    left: 50%;
    transform: translateX(-50%);
  }
`;

class MenuButton extends React.Component {
  render() {
    return (
      <ButtonStyle
        onMouseOver={() => this.props.showPage(this.props.index)}
        color={this.props.color}
      >
        <Icon
          name={this.props.icon}
          style={{ fontSize: "50px", transform: "translateY(30%)" }}
        />
        <span>{this.props.text}</span>
      </ButtonStyle>
    );
  }
}

export default MenuButton;
