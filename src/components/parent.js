import React, { Component } from "react";
import Child1 from "./child1";
import Child2 from "./child2";

export default class Parent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Child1 />
        <Child2 />
      </div>
    );
  }
}
