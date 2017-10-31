import React, { Component } from "react";
import { fetchClothingItem, updateClothingItem } from "../actions/crud";

export default class FormUpdate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.name,
      sleeveLength: this.props.sleeveLength,
      fabricWeight: this.props.fabricWeight,
      mood: this.props.mood,
      color: this.props.color
    };

    //this.addClothingItem = this.addClothingItem.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleSleeveLength = this.handleSleeveLength.bind(this);
    this.handleFabricWeight = this.handleFabricWeight.bind(this);
    this.handleMood = this.handleMood.bind(this);
    this.handleColor = this.handleColor.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(data) {
    console.log("handleSubbbmit");
    updateClothingItem(this.state.updateClothingItem.id, data);
    this.props.router.push("/update");
  }

  componentWillReceiveProps(props) {
    this.setState(props);
  }

  componentWillReceiveProps(props) {
    this.setState(props);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state);
  }

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
      <form onSubmit={this.addClothingItem}>
        <label>
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleName}
            placeholder="Item Name"
          />
        </label>

        <label>
          Sleeve Length:
          <select
            value={this.state.sleeveLength}
            onChange={this.handleSleeveLength}
          >
            <option value={null}>Select Sleeve Length</option>
            <option value="3">Short Sleeve</option>
            <option value="2">Long Sleeve</option>
            <option value="1">No Sleeve</option>
          </select>
        </label>
        <label>
          Weight:
          <select
            value={this.state.fabricWeight}
            onChange={this.handleFabricWeight}
          >
            <option value={null}>Select Fabric Weight</option>
            <option value="3">Light Weight</option>
            <option value="2">Medium Weight</option>
            <option value="1">Heavy Weight</option>
          </select>
        </label>

        <label>
          Color:
          <select value={this.state.color} onChange={this.handleColor}>
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

        <label>
          Mood:
          <select value={this.state.mood} onChange={this.handleMood}>
            <option value={null}>Select Mood</option>
            <option value="Happy">Happy</option>
            <option value="Angry">Angry</option>
            <option value="Shy">Shy</option>
            <option value="Sexy">Sexy</option>
            <option value="Gloomy">Gloomy</option>
          </select>
        </label>
        <button
          type="submit"
          onClick={this.props.handleSubmit}
          className="addItemButton"
        >
          Button
        </button>
      </form>
    );
  }
}
