import React, { Component } from "react";
import Form from "../components/form";
import { fetchBlogPost, updateBlogPost } from "../../actions/blogPostActions";

export default class Update extends Component {
  constructor(props) {
    super(props);

    this.state = {
      updateClothingItem:{}
    };

  componentDidMount() {
    fetchBlogPost(this.props.params.postId)
      .then(data => {
        this.setState(state => {
          state.updateClothingItem = data;
          return state;
        });
      })
      .catch(err => {
        console.error("err", err);
      });
  },

  handleSubmit(data) {
    updateBlogPost(this.state.updateClothingItem.id, data);
    this.props.router.push("/");
  },

  render() {
    return (
      <div>
        <Form
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
});

export default Update;
