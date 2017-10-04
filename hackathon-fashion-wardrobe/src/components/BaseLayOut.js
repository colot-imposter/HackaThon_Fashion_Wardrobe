import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class BaseLayout extends Component {
  render() {
    let whole = {
      fontFamily: "Cookie"
    };

    let navs = {
      display: "flex",
      justifyContent: "space-around",
      textAlign: "center",
      fontSize: 20,
      margin: 15
    };

    let dru = {
      fontSize: 30
    };

    let nav = {
      textDecoration: "none",
      color: "black"
    };

    let footer = {
      padding: "20px 0px 20px 15px",
      display: "flex",
      justifyContent: "flex-start",
      position: "fixed",
      bottom: 0,
      left: 0,
      right: 0,
      height: "20px",
      width: "100%",
      zIndex: 2,
      backgroundColor: "black",
      color: "white"
    };

    return (
      <div style={whole} className="BaseLayout">
        <div style={navs}>
          <div style={dru}>
            <NavLink style={nav} exact to="/">
              HOME!
            </NavLink>
            <NavLink style={nav} to="/temp">
              TEMP
            </NavLink>
          </div>
          <br />
          <NavLink style={nav} to="/login">
            Log In/Sign Up!
          </NavLink>
        </div>

        <div>
          {this.props.children}
          <div>
            <footer style={footer}>Wardrobe</footer>
          </div>
        </div>
      </div>
    );
  }
}
