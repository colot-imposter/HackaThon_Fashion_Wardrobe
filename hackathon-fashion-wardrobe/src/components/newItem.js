import React, { Component } from "react";

export default class newItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sleeveLength: "",
      fabricWeight: ""
    };
  }

  render() {
    let formStyle={
      color:"#837095",
      display:"flex",
      flexDirection:"column",
      fontSize:"20px",
    }
    let inputStyle={
      border:"none",
      textAlign:"center",
      display:"flex",
      flexDirection:"row",
      fontSize:"20px",
      color:"#837095",
      paddingTop:"15px"
    }
    let buttonStyle={
      justifyContent:"center",
      fontSize:"20px",
      color:"#837095",
      width:"70px",
      marginTop:"20px"
    }

    return (
      <div style={formStyle}>
        <form style={formStyle} onSubmit={this.handleSubmit}>
          <label style={inputStyle}>
            Sleeve Length:
            <select style={inputStyle}
              value={this.state.sleeveLength}
              onChange={this.handleChange}
            >
              <option value="Short">Short Sleeve</option>
              <option value="Long">Long Sleeve</option>
              <option value="No">No Sleeve</option>
            </select>
          </label>
          <label style={inputStyle}>
            Weight:
            <select style={inputStyle}
              value={this.state.fabricWeight}
              onChange={this.handleChange}
            >
              <option value="Light">Light Weight</option>
              <option value="Medium">Medium Weight</option>
              <option value="Heavy">Heavy Weight</option>
            </select>
          </label>
          {/* <label>
          Color:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="Black">Black</option>
            <option value="White">White</option>
            <option value="Red">Red</option>
            <option value="Blue">Blue</option>
            <option value="Pattern">Pattern</option>
          </select>
        </label> */}
          <input style={buttonStyle} type="submit" value="Add Item" />
        </form>
        <div className="description">
          <p> * insert image of short long and no sleeve top </p>
          <p> * insert image of light mid and heavy weight top </p>
        </div>
      </div>
    );
  }
}
