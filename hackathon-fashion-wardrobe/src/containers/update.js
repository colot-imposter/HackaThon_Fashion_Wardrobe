import React, { Component } from "react";

import FormUpdate from "../components/formUpdate";
import { fetchClothingItem, updateClothingItem } from "../actions/crud";


export default class Update extends Component {
  constructor(props) {
    super(props);

    this.state = {
      updateClothingItem: {}
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    fetchClothingItem(this.props.match.params.postId)
      .then(data => {
        this.setState(state => {
          state.updateClothingItem = data;
          return state;
        });
        console.log("data", data);
        console.log(
          "this.state.updateClothingItem",
          this.state.updateClothingItem
        );
      })
      .catch(err => {
        console.error("err", err);
      });
  }

  handleSubmit(data) {
    console.log("this.state.updateClothingItem", this.state.updateClothingItem);
    updateClothingItem(this.state.updateClothingItem, data);
  }

  render() {
    return (
      <div>

        <FormUpdate className="updateInput"
          
          id={this.state.updateClothingItem.id}

          name={this.state.updateClothingItem.name}
          sleeveLength={this.state.updateClothingItem.sleeveLength}
          fabricWeight={this.state.updateClothingItem.fabricWeight}
          mood={this.state.updateClothingItem.body}
          color={this.state.updateClothingItem.color}
        />
        <button
          type="submit"
          onClick={this.handleSubmit}
          className="addItemButton"
        >
          Button
        </button>
      </div>
    );
  }
}
