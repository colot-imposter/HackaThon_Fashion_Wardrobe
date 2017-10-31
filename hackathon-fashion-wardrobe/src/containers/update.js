import React, { Component } from "react";

import FormUpdate from "../components/formUpdate";
import {
  fetchClothingItem,
  updateClothingItem,
  deleteClothingItem
} from "../actions/crud";

export default class Update extends Component {
  constructor(props) {
    super(props);

    this.state = {
      updateClothingItem: {},
      index: this.props.index
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentWillMount() {
    console.log("this.props.paramsPPPPPPP", this.state.index);
    fetchClothingItem(this.props.index.id)
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
    updateClothingItem(this.state.updateClothingItem);
  }

  handleDelete(data) {
    console.log("this.props.match.params.postId", this.state.index.id);
    deleteClothingItem(this.state.index.id);
  }

  render() {
    return (
      <div>
        <FormUpdate
          className="updateInput"
          clothingItem={this.state.updateClothingItem}
          id={this.state.updateClothingItem.id}
          name={this.state.updateClothingItem.name}
          sleeveLength={this.state.updateClothingItem.sleeveLength}
          fabricWeight={this.state.updateClothingItem.fabricWeight}
          mood={this.state.updateClothingItem.body}
          color={this.state.updateClothingItem.color}
        />

        <button
          type="submit"
          onClick={this.handleDelete}
          className="deleteItemButton"
        >
          Delete
        </button>
      </div>
    );
  }
}
