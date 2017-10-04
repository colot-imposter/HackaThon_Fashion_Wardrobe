import React, { Component } from "react";
import { connect } from "react-redux";

import Login from "../containers/Login.js";
import Register from "../containers/Register.js";
import UserInfo from "../containers/UserInfo.js";
import TodaysLook from "./TodaysLook.js";
import Home from "./Home.js";

import { loadTokenFromCookie } from "../actions/actions";

class App extends Component {
  componentWillMount() {
    const loadToken = this.props.loadToken;
    loadToken();
  }
  render() {
    return (
      <div className="container">
        <Home />
        <TodaysLook />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    loadToken: () => dispatch(loadTokenFromCookie())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
