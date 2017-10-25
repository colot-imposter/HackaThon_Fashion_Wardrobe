import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import step1 from "../styles/imgs/add1.jpg";
import step2 from "../styles/imgs/outfit.jpg";
import step3 from "../styles/imgs/styled.jpg";

export default class Home extends Component {
  render() {



    return (
      <div className="steps">
        <div className="scrollPics">
          <div className="photobanner">
            <h2> Step 1: Upload Clothes</h2>
            <img class="first" src={step1} alt="step1" />
            <h2> Step 2: Checkout Todays Look</h2>
            <img src={step2} alt="step2" />
            <h2> Step 3: Get Stylin'</h2>
            <img src={step3} alt="step3" />
          </div>
        </div>
      </div>
    );
  }
}
