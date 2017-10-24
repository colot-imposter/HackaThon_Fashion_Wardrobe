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
    let buttonStyle={
      display:"flex",
      justifyContent:"center",
      fontSize:"15px",
      color:"#837095",
      width:"170px",
      backgroundColor:"white",
      borderWidth:"1px",
      borderRadius:"10px",
      marginTop:"10px",
      marginBottom:"10px",
      outline:"none"
    }
    let style={
      color: "#837095",
      fontFamily: "Ubuntu, sans-serif",
      textAlign:"center"
    }
    return (
      <div className="BaseLayout">
        <div>
          <h1 style={style}>You are logged out, log back in to see your profile</h1>
          <div style={{display:"flex",justifyContent:"center"}}>
            <button type="submit" onClick={this.logOutHandler} style={buttonStyle}>
              Dirty Secrets
            </button>
          </div>
        </div>
        {this.props.childeren}
      </div>
    );
  }
}
