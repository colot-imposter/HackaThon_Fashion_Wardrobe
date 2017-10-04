import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import SetUpAccount from "./SetUpAccount.js";
import UpdateAccount from "./UpdateAccount.js";
import User_Dashboard from "./User_Dashboard.js";
import Wardrobe from "./Wardrobe.js";

export default class TEMP extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="TEMP">
        <div>
          <h1>HELO</h1>
          <div>
            <SetUpAccount />
            <UpdateAccount />
            <User_Dashboard />
            <Wardrobe />
          </div>
        </div>
        {this.props.childeren}
      </div>
    );
  }
}
