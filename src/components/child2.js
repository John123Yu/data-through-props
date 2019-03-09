import React, { Component } from "react";
export default class Child2 extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    let randomNumber = randomString(5);
    this.props.mutateState(randomNumber);
  }

  render() {
    return (
      <div className="child2" onClick={this.handleClick}>
        Child 2 value is: <span>{this.props.value}</span>
      </div>
    );
  }
}

function randomString(length) {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  for (var i = 0; i < length; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
}
