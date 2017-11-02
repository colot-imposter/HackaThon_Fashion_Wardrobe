import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class LogOut extends Component {
  constructor(props) {
    super(props);
    this.logOutHandler = this.logOutHandler.bind(this);
  }

  logOutHandler(e) {
    e.preventDefault();
    console.log("oioioioi");
  }

  render() {
    return (
      <div className="baseLayout">
        <div className="container">
          <div className="card logoutHead">
            <h1 className="logoutHead">
              You are logged out, log back in to see your look!
            </h1>
            <div className="bodyButton">
              <div className="buttonHead">
                <a href="/login">Login</a>
              </div>
            </div>
          </div>
        </div>

        {this.props.childeren}
      </div>
    );
  }
}
