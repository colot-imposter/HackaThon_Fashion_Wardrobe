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
    return (
      <div className="updateForm">
        <h1>Update Item</h1>
        <form onSubmit={this.handleSubmit}>
        <label className="updateSelect">
          <input
            className="textStyle"
            type="text"
            onChange={this.handleChange}
            placeholder="Item Name"
          />
        </label>

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
          <label className="updateSelect">
            Color:
            <select className="updateSelect"
            value={this.state.color} onChange={this.handleChange}>
              <option value={null}>Select Color</option>
              <option value="Black">Black</option>
              <option value="White">White</option>
              <option value="Red">Red</option>
              <option value="Purple">Purple</option>
              <option value="Blue">Blue</option>
              <option value="Orange">Orange</option>
              <option value="Yellow">Yellow</option>
              <option value="Green">Green</option>
            </select>
          </label>

          <label className="updateSelect">
            Mood:
            <select className="updateSelect"
            value={this.state.mood} onChange={this.handleChange}>
              <option value={null}>Select Mood</option>
              <option value="Happy">Happy</option>
              <option value="Angry">Angry</option>
              <option value="Shy">Shy</option>
              <option value="Sexy">Sexy</option>
              <option value="Gloomy">Gloomy</option>
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
          <input className="updateButton"type="submit" value="Update"/>
        </form>
        <button className="updateButton">Delete Item</button>
      </div>
    );
  }
}
