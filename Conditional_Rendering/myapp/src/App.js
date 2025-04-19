import React, { Component } from "react";
import User from "./User";
import Guest from "./Guest";

export default class App extends Component {
  state = {
    LoggedIn: false,
  };
  clickLogin = () => {
    this.setState({ LoggedIn: true });
  };

  clickLogout = () => {
    this.setState({ LoggedIn: false });
  };
  render() {
    const consumer = this.state.LoggedIn;
    // if (consumer) {
    //   return <User />;
    // }
    // return <Guest />;

    return (
      <div>
        {consumer ? (
          <User clickdata={this.clickLogout} />
        ) : (
          <Guest clickdata={this.clickLogin} />
        )}
      </div>
    );
  }
}
