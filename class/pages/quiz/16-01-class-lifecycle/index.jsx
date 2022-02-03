import { Component } from "react";
import Router from "next/router";

export default class Lifecycle extends Component {
  state = {
    isChange: false,
  };

  onClickChangeMode = () => {
    this.setState({
      isChange: true,
    });
    console.log(this.state);
  };

  onClickChangePage = () => {
    Router.push("/");
  };
  componentDidUpdate() {
    alert("Rerendered!");
  }

  render() {
    return (
      <div>
        <button onClick={this.onClickChangeMode}>변경</button>
        <button onClick={this.onClickChangePage}>이동</button>
      </div>
    );
  }
}
// 1-1 5번까지
