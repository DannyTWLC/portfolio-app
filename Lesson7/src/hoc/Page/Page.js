import React, { Component } from "react";
import Intro from "../../components/Intro/Intro";
import Reactjs from "../../components/Reactjs/Reactjs";

class Page extends Component {
  displayPage = no => {
    switch (no) {
      case 0:
        return <Intro />;
      case 1:
        return <Reactjs />;
      default:
        return <Intro />;
    }
  };

  render() {
    return <div>{this.displayPage(this.props.page)}</div>;
  }
}

export default Page;
