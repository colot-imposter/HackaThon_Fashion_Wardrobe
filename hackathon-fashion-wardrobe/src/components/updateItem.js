import React, { Component } from "react";
import Form from "./form";

export default class updateItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sleeveLength: "",
      fabricWeight: ""
    };
  }
  render() {
    return (
      <div className="updateForm">
        <h1>Update Item</h1>

        <Form />

        <button>Delete Item</button>

        {/* the form component will render the Form


          <form onSubmit={this.handleSubmit}>
          <label>
            Sleeve Length:
            <select className="updateSelect"
              value={this.state.sleeveLength}
              onChange={this.handleChange}
            >
              <option value="Short">Short Sleeve</option>
              <option value="Long">Long Sleeve</option>
              <option value="No">No Sleeve</option>
            </select>
          </label>
          <label>
            Weight:
            <select className="updateSelect"
              value={this.state.fabricWeight}
              onChange={this.handleChange}
            >
              <option value="Light">Light Weight</option>
              <option value="Medium">Medium Weight</option>
              <option value="Heavy">Heavy Weight</option>
            </select>
          </label>
        <label>
          Color:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="Black">Black</option>
            <option value="White">White</option>
            <option value="Red">Red</option>
            <option value="Blue">Blue</option>
            <option value="Pattern">Pattern</option>
          </select>
        </label>
          <input className="updateButton"type="submit" value="Update" />
        </form>
        <button className="updateButton">Delete Item</button> */}
      </div>
    );
  }
}
