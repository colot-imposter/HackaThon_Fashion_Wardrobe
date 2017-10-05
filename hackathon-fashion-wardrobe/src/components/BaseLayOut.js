import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import styles from "../styles/App.css";
import hamPic from "../styles/imgs/hamburgerpurple.png";
import logo from "../styles/imgs/Logo.png";

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
      margin: 15,
      fontFamily:"Ubuntu, sans-serif",
      color:"#837095"
    };

    let dru = {
      fontSize: 30
    };

    let nav = {
      textDecoration: "none",
      color:"#837095"
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
      backgroundColor:"#837095",
      color: "white"
    };

    return (
      <div style={whole} className="BaseLayout">
        <div style={navs}>
          <div style={dru}>
            <NavLink style={nav} exact to="/User_Dashboard">
              <img src={logo} className="hangerLogo"/>
            </NavLink>
          </div>
          <br />
          <div className="hamburger">
            <img src={hamPic} className="hamburgerMenu" style={{color:"#837095"}}/>
            <ul>
              <li>
                <NavLink style={nav} exact to="/User_Dashboard">
                  User Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink style={nav} to="/Wardrobe">
                  Wardrobe
                </NavLink>
              </li>
              <li>
                <NavLink style={nav} to="/TodaysLook">
                  TodaysLook
                </NavLink>
              </li>
            </ul>
          </div>
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
