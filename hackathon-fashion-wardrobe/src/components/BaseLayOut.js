import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import styles from "../styles/App.css";
import hamPic from "../styles/imgs/hamburgerpurple.png";
import logo from "../styles/imgs/Logo.png";

export default class BaseLayout extends Component {
  render() {

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
    let border ={
  "borderBottomWidth":"3px",
  "borderBottomColor":"#837095",
  "borderBottomStyle":"solid",
  "postion":"relative",
  "overflow":"hidden"
}

    return (
      <div className="BaseLayout">
        <div>
          <div className="body">
              <nav className="row navbar navbar-inverse">
                <div className="container-fluid">
                <div style={border} className="navbar-header">
                  <a href="/User_Dashboard"><img src={logo} alt="logo" style={{paddingTop:"15px",paddingLeft:"30px",float:"left",height:"80px"}}></img></a>
                    <div className="dropdown">
                      <button className="dropbtn"><img src={hamPic} style={{height:"60px"}} alt="Menu"></img></button>
                      <div className="dropdown-content">
                        <a href="/Login">Login</a>
                        <a href="/">Home</a>
                        <a href="/TodaysLook">Todays Look</a>
                        <a href="/Wardrobe">Wardrobe</a>
                        <a href="/User_Dashboard">Dashboard</a>
                        <a href="/UpdateAccount">Your Profile</a>
                        <a href="/Logout">Logout</a>
                    </div>
                    </div>
                  </div>
                </div>
              </nav>

          {this.props.children}
          <div>
            <footer style={footer}>Tunic inc.</footer>
          </div>
          </div>
          </div>
          </div>
    );
  }
}
