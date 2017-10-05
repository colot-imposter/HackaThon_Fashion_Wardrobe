import React, { Component } from "react";
import step1 from "../styles/imgs/add1.jpg";
import step2 from "../styles/imgs/outfit.jpg";
import step3 from "../styles/imgs/styled.jpg";

export default class Home extends Component {
  render() {
    let stepstyle = {
      textDecoration: "none",
      fontFamily: "Ubuntu, sans-serif",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      alignText: "center",
      color: "#837095"
    };
    let imgstyle = {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      alignText: "center"
    };
    return (
      <div className="steps" style={stepstyle}>
        {/* making a scrolling photobanner */}
        <div id="scrollPics">
          <div class="photobanner">
            <h2> Step 1: Upload Clothes</h2>
            <img class="first" src={step1} alt="" />
            <h2> Step 2: Checkout Todays Look</h2>
            <img src={step2} alt="" />
            <h2> Step 3: Get Stylin'</h2>
            <img src={step3} alt="" />
          </div>
        </div>
      </div>
    );
  }
}
