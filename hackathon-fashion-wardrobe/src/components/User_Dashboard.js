import React, { Component } from "react";


export default class Dashboard extends Component {
  render(){
      return(
        <div className="welcome">
        <h1> Welcome User</h1>
        <br></br>
        </div>
        <div className="toady">
        <Link to="/TodaysLook"><h3> See Todays Look </h3></Link>
        <br></br>
        </div>
        <div className="all">
        <Link to="/Wardrobe"><h3> View Your Closet </h3></Link>
        <br></br>
        </div>
        <div className="add">
        <Link to="/Item"><h3> Add A New Item </h3></Link>
        </div>
      )}}
