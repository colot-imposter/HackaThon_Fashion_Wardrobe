import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/App.css";


export default class Dashboard extends Component {
  render() {
    let dashstyle={
      textDecoration:"none",
      fontFamily:"Ubuntu, sans-serif",
      display:"flex",
      flexDirection:"column",
      alignItems:"center",
      alignText:"center",
      color:"#837095"
    }
    let linkstyle={
      textDecoration:"none",
    color:"#837095"}
    return (
      <div className="container" style={dashstyle}>
        <div className="welcome">
          <h1> Welcome Courtney</h1>
          <br />
        </div>
        <div className="today">
          <Link to="/TodaysLook" style={linkstyle}>
            <h2> See Todays Look </h2>
          </Link>
          <br />
        </div>
        <div className="all">
          <Link to="/Wardrobe" style={{textDecoration:"none",color:"#837095"}}>
            <h2> View Your Closet </h2>
          </Link>
          <br />
        </div>
        <div className="add">
          <Link to="/Item" style={{textDecoration:"none",color:"#837095"}}>
            <h2> Add A New Item </h2>
          </Link>
        </div>
      </div>
    );
  }
}
