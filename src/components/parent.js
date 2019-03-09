import React, { Component } from "react";
import Child1 from "./child1";
import Child2 from "./child2";
import { random0To99 } from "../helpers";

export default class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      child1: random0To99(),
      child2: random0To99()
    };
    this.mutateChild1 = this.mutateChild1.bind(this);
    this.mutateChild2 = this.mutateChild2.bind(this);
  }
  mutateChild1(value) {
    this.setState({
      child1: value
    });
  }
  mutateChild2(value) {
    this.setState({
      child2: value
    });
  }
  render() {
    return (
      <div>
        <Child1 number={this.state.child1} mutateState={this.mutateChild1} />
        <Child2 number={this.state.child2} mutateState={this.mutateChild2} />
      </div>
    );
  }
}
