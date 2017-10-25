import React, { Component } from "react";
import request from "../../node_modules/superagent/superagent";

export default class newItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articleName: "TEST",
      sleeveLength: 2,
      fabricWeight: 2
    };
    this.addClothingItem = this.addClothingItem.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleSleeveLength = this.handleSleeveLength.bind(this);
    this.handleFabricWeight = this.handleFabricWeight.bind(this);
  }
  addClothingItem(event) {
    event.preventDefault();
    console.log("hitting");
    fetch("https://tunic-wardrobe-api.herokuapp.com/clothing/add", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: "SUNdayPople",
        sleeveLength: 2,
        fabricWeight: 3
      })
    }).catch(function() {
      console.log("error");
    });
  }

  //_________________

  //    ______________
  // these .state variables will be plugged into the api to catch the filtered list.

  // let articleName = this.state.articleName;
  // let sleeveLength = this.state.sleeveLength;
  // let fabricWeight = this.state.fabricWeight;

  //     .post("https://tunic-wardrobe-api.herokuapp.com/api/clothing/add")
  //     .set("Content-Type", "application/x-www-form-urlencoded")
  //     .send({
  //
  //       // color: "color"
  //     })
  //     .end(function(err, res) {
  //       console.log("error", res.text);
  //     });
  // }
  // handleColor(e){
  //   e.preventDefault();
  //   this.setState({
  //     color: e.target.value
  //   });
  // }

  handleFabricWeight(e) {
    e.preventDefault();
    this.setState({
      fabricWeight: parseInt(e.target.value)
    });
    console.log("fabricWeight", this.state.fabricWeight);
    console.log("typeOf", typeof this.state.fabricWeight);
  }

  handleSleeveLength(e) {
    e.preventDefault();
    this.setState({
      sleeveLength: parseInt(e.target.value)
    });
    console.log("sleeveLength", this.state.sleeveLength);
    console.log("typeOf", typeof this.state.sleeveLength);
  }

  handleName(e) {
    e.preventDefault();
    this.setState({
      articleName: e.target.value
    });
    console.log("fabricWeight", this.state.articleName);
    console.log("typeOf", typeof this.state.articleName);
  }

  componentDidMount() {
    fetch("https://tunic-wardrobe-api.herokuapp.com/clothing/all")
      .then(function(response) {
        return response.json();
      })
      .then(function(response) {
        console.log(response);
      });
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
              <option value="1">Short Sleeve</option>
              <option value="2">Long Sleeve</option>
              <option value="3">No Sleeve</option>
            </select>
          </label>
          <label className="newItemInput">
            Weight:
            <select
              className="newItemInput"
              value={this.state.fabricWeight}
              onChange={this.handleFabricWeight}
            >
              <option value="1">Light Weight</option>
              <option value="2">Medium Weight</option>
              <option value="3">Heavy Weight</option>
            </select>
          </label>

          {/* <label>
          Color:
          <select value={this.state.value} onChange={this.handleColor}>
            <option value="Black">Black</option>
            <option value="White">White</option>
            <option value="Red">Red</option>
            <option value="Blue">Blue</option>
            <option value="Pattern">Pattern</option>
          </select>
        </label> */}
          <button
            type="submit"
            onClick={this.props.addClothingItem}
            className="addItemButton"
          >
            Add Item
          </button>
        </form>
      </div>
    );
  }
}
