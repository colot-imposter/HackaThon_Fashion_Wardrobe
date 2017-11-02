import React, { Component } from "react";
import hamPic from "../styles/imgs/hamburgerpurple.png";
import logo from "../styles/imgs/Logo.png";

export default class BaseLayout extends Component {
  render() {
    let border = {
      borderBottomWidth: "3px",
      borderBottomColor: "#837095",
      borderBottomStyle: "solid",
      postion: "relative",
      overflow: "hidden",
      outline: "none"
    };

    return (
      <div className="BaseLayout">
        <div>
          <div className="body">
            <nav className="row navbar navbar-inverse">
              <div className="container-fluid">
                <div style={border} className="navbar-header">
                  <a href="/TodaysLook">
                    <img src={logo} alt="logo" className="logoimg" />
                  </a>
                  <div className="dropdown">
                    <button className="dropbtn">
                      <img src={hamPic} alt="Menu" />
                    </button>
                    <div className="dropdown-content">
                      <a href="/TodaysLook">Todays Look</a>
                      <a href="/Wardrobe">Wardrobe</a>
                      <a href="/newItem">Add Item</a>
                      <a href="/help">Help</a>

                      <a href="/Login">Login</a>
                      <a href="/Logout">Logout</a>
                    </div>
                  </div>
                </div>
              </div>
            </nav>

            {this.props.children}
            <div>
              <footer>
                <p className="name">Tunic inc.</p>
                <p className="help">
                  <a href="/help">Help</a>
                </p>
              </footer>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
