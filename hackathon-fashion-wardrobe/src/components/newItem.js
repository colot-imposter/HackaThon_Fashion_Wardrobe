import React, { Component } from "react";
import request from "../../node_modules/superagent/superagent";

export default class newItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      sleeveLength: undefined,
      fabricWeight: undefined,
      mood: "",
      color: ""
    };
    this.addClothingItem = this.addClothingItem.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleSleeveLength = this.handleSleeveLength.bind(this);
    this.handleFabricWeight = this.handleFabricWeight.bind(this);
    this.handleMood = this.handleMood.bind(this);
    this.handleColor = this.handleColor.bind(this);
  }
  addClothingItem(event) {
    event.preventDefault();
    console.log("addint item");
    request
      .post("https://tunic-wardrobe-api.herokuapp.com/clothing/add")
      .set("Content-Type", "application/x-www-form-urlencoded")
      .send({
        name: this.state.name,
        sleeveLength: this.state.sleeveLength,
        fabricWeight: this.state.fabricWeight,
        mood: this.state.mood,
        color: this.state.color
      })
      .catch(function(err, res) {
        console.log("error", res);
      });
  }

  // these .state variables will be plugged into the api to catch the filtered list.

  // let articleName = this.state.articleName;
  // let sleeveLength = this.state.sleeveLength;
  // let fabricWeight = this.state.fabricWeight;
  handleMood(e) {
    e.preventDefault();
    this.setState({
      mood: e.target.value
    });
    console.log("this.state.mood", this.state.mood);
  }

  handleColor(e) {
    e.preventDefault();
    this.setState({
      color: e.target.value
    });
    console.log("this.state.color", this.state.color);
  }

  handleFabricWeight(e) {
    e.preventDefault();
    this.setState({
      fabricWeight: parseInt(e.target.value)
    });
    console.log("this.state.fabricWeight", this.state.fabricWeight);
  }

  handleSleeveLength(e) {
    e.preventDefault();
    this.setState({
      sleeveLength: parseInt(e.target.value)
    });
  }

  handleName(e) {
    e.preventDefault();
    this.setState({
      name: e.target.value
    });
    console.log("this.state.name", this.state.name);
  }

  render() {



    return (
      <div className="newItemForm">
        <form className="newItemForm" onSubmit={this.addClothingItem}>
          <label className="newItemInput">
            <input
              className="textStyle"
              type="text"
              onChange={this.handleName}
              placeholder="Item Name"
            />
          </label>

          <label className="newItemInput">
            Sleeve Length:
            <select
              className="newItemInput"
              value={this.state.sleeveLength}
              onChange={this.handleSleeveLength}
            >
              <option value={null}>Select Sleeve Length</option>
              <option value="3">Short Sleeve</option>
              <option value="2">Long Sleeve</option>
              <option value="1">No Sleeve</option>
            </select>
          </label>
          <label className="newItemInput">
            Weight:
            <select
              className="newItemInput"
              value={this.state.fabricWeight}
              onChange={this.handleFabricWeight}
            >
              <option value={null}>Select Fabric Weight</option>
              <option value="3">Light Weight</option>
              <option value="2">Medium Weight</option>
              <option value="1">Heavy Weight</option>
            </select>
          </label>

          <label className="newItemInput">
            Color:
            <select className="newItemInput"
            value={this.state.color} onChange={this.handleColor}>
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

          <label className="newItemInput">
            Mood:
            <select className="newItemInput"
            value={this.state.mood} onChange={this.handleMood}>
              <option value={null}>Select Mood</option>
              <option value="Happy">Happy</option>
              <option value="Angry">Angry</option>
              <option value="Shy">Shy</option>
              <option value="Sexy">Sexy</option>
              <option value="Gloomy">Gloomy</option>
            </select>
          </label>
          <div className="bodyButton">
          <button
            type="submit"
            onClick={this.props.addClothingItem}
            className="addItemButton"
          >
            Add Item
          </button>
          </div>
        </form>
      </div>
    );
  }
}
