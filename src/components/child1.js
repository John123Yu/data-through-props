import React, { Component } from "react";
import { random0To99 } from "../helpers";

export default class Child1 extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    let randomNumber = random0To99();
    this.props.mutateState(randomNumber);
  }

  render() {
    return (
      <div className="child1" onClick={this.handleClick}>
        Child 1 value is: <span>{this.props.number}</span>
      </div>
    );
  }
}
