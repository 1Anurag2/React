import React, { Component } from "react";
import User from "./User";
import Guest from "./Guest";

export default class App extends Component {
  render() {
    const consumer = this.props.consumer;
    if (consumer) {
      return <User />;
    }
    return <Guest />;
  }
}
