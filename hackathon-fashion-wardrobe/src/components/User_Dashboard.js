import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Dashboard extends Component {
  render() {
    return (
      <div className="container">
        <div className="welcome">
          <h1> Welcome User</h1>
          <br />
        </div>
        <div className="toady">
          <Link to="/TodaysLook">
            <h3> See Todays Look </h3>
          </Link>
          <br />
        </div>
        <div className="all">
          <Link to="/Wardrobe">
            <h3> View Your Closet </h3>
          </Link>
          <br />
        </div>
        <div className="add">
          <Link to="/Item">
            <h3> Add A New Item </h3>
          </Link>
        </div>
      </div>
    );
  }
}
