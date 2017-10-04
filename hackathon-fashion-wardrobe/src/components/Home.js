import React, { Component } from "react";
import step1 from "../styles/imgs/add1.jpg";
import step2 from "../styles/imgs/outfit.jpg";
import step3 from "../styles/imgs/styled.jpg";

export default class Home extends Component {
  render() {
    let stepstyle={
      textDecoration:"none",
      fontFamily:"Ubuntu, sans-serif",
      display:"flex",
      flexDirection:"column",
      alignItems:"center",
      alignText:"center",
      color:"#837095"
    }
    let imgstyle={
      display:"flex",
      flexDirection:"row",
      alignItems:"center",
      alignText:"center",
    }
    return (
      <div className="steps" style={stepstyle}>
        <div className="step1" style={imgstyle}>
          <h2> Step 1: Upload Clothes</h2>
          <img src={step1} className="step1" style={{width:'150px',padding:"120px"}} />
          <br />
        </div>
        <div className="step2" style={imgstyle}>
          <h2> Step 2: Checkout Todays Look</h2>
          <img src={step2} className="step2" style={{height:'150px', padding:"120px"}} />
          <br />
        </div>
        <div className="step3" style={imgstyle}>
          <h2> Step 3: Get Stylin'</h2>
          <img src={step3} className="step3" style={{width:'150px',padding:"120px"}} />
        </div>
      </div>
    );
  }
}
