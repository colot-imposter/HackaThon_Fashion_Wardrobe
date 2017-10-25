import React, { Component } from "react";

export default class updateItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sleeveLength: "",
      fabricWeight: ""
    };
  }
  render() {
<<<<<<< HEAD
    let formStyle = {
      color: "#837095",
      display: "flex",
      flexDirection: "column",
      fontSize: "20px",
      justifyContent: "center"
    };
    let inputStyle = {
      border: "none",
      textAlign: "center",
      display: "flex",
      flexDirection: "row",
      fontSize: "20px",
      color: "#837095",
      paddingTop: "15px",
      paddingRight: "15px",
      padidngBottom: "15px"
    };
    let buttonStyle = {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      fontSize: "15px",
      color: "#837095",
      width: "170px",
      backgroundColor: "white",
      borderWidth: "1px",
      borderRadius: "10px",
      marginTop: "10px",
      marginBottom: "10px"
    };
    let selectStyle = {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      fontSize: "15px",
      color: "#837095",
      width: "170px",
      backgroundColor: "white"
    };

=======
>>>>>>> 0966429a90ee3d58a7ca92a7ec546f07e0f6f9cf
    return (
      <div>
        <h1 className="updateForm">Update Item</h1>
        <form onSubmit={this.handleSubmit} className="updateForm">
          <label className="updateInput">
            Sleeve Length:
<<<<<<< HEAD
            <select
              style={selectStyle}
=======
            <select className="updateSelect"
>>>>>>> 0966429a90ee3d58a7ca92a7ec546f07e0f6f9cf
              value={this.state.sleeveLength}
              onChange={this.handleChange}
            >
              <option value="Short">Short Sleeve</option>
              <option value="Long">Long Sleeve</option>
              <option value="No">No Sleeve</option>
            </select>
          </label>
          <label className="updateInput">
            Weight:
<<<<<<< HEAD
            <select
              style={selectStyle}
=======
            <select className="updateSelect"
>>>>>>> 0966429a90ee3d58a7ca92a7ec546f07e0f6f9cf
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
<<<<<<< HEAD
          <input style={buttonStyle} type="submit" value="Update" />
=======
          <input className="updateButton" type="submit" value="Add Item" />
>>>>>>> 0966429a90ee3d58a7ca92a7ec546f07e0f6f9cf
        </form>
        <button className="updateButton">Delete Item</button>
      </div>
    );
  }
}
