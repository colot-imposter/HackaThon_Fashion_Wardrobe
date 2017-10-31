import React, { Component } from "react";
import FormUpdate from "../components/formUpdate";
import { fetchClothingItem, updateClothingItem } from "../actions/crud";

export default class UpdateItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      updateClothingItem: {}
    };
  }
  componentWillMount() {
    console.log("this.props.params", this.props.match.params.postId);
    fetchClothingItem(this.props.match.params.postId)
      .then(data => {
        this.setState(state => {
          state.updateClothingItem = data;
          return state;
        });
      })
      .catch(err => {
        console.error("err", err);
      });
  }

  handleSubmit(data) {
    updateClothingItem(this.state.updateClothingItem.id, data);
    this.props.router.push("/");
  }

  render() {
    return (
      <div>

      <h1 className="updateForm">Update Item</h1>
        <FormUpdate className="updateForm"

          onSubmit={this.handleSubmit.bind(this)}
          id={this.state.updateClothingItem.title}
          name={this.state.updateClothingItem.name}
          sleeveLength={this.state.updateClothingItem.sleeveLength}
          fabricWeight={this.state.updateClothingItem.fabricWeight}
          mood={this.state.updateClothingItem.body}
          color={this.state.updateClothingItem.color}
        />
      </div>
    );
  }
}
