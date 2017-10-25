import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/App.css";

export default class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <div className="welcome">
          <h1> Welcome Colton</h1>
          <br />
        </div>
        <div className="today">
          <Link to="/TodaysLook" className="dashLinks">
            <h2> See Todays Look </h2>
          </Link>
          <br />
        </div>
        <div className="all">
          <Link
            to="/Wardrobe"
            className="dashLinks">
            <h2> View Your Closet </h2>
          </Link>
          <br />
        </div>
        <div className="add">
          <Link
            to="/newItem"
            className="dashLinks">
            <h2> Add A New Item </h2>
          </Link>
        </div>
      </div>
    );
  }
}
