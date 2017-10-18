import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import SetUpAccount from "./SetUpAccount.js";
import UpdateAccount from "./UpdateAccount.js";
import User_Dashboard from "./User_Dashboard.js";
import Wardrobe from "./Wardrobe.js";

export default class MatchTodaysLook extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="MatchTodaysLook">
        <div>
          <div />
        </div>
        {this.props.childeren}
      </div>
    );
  }
}
