import React, { Component } from "react";
import Form from "../components/form";
import { fetchBlogPost, updateBlogPost } from "../../actions/blogPostActions";

export default class Update extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      sleeveLength: undefined,
      fabricWeight: undefined,
      mood: "",
      color: ""
    };

  componentDidMount() {
    fetchBlogPost(this.props.params.postId)
      .then(data => {
        this.setState(state => {
          state.blogPost = data;
          return state;
        });
      })
      .catch(err => {
        console.error("err", err);
      });
  },

  handleSubmit(data) {
    updateBlogPost(this.state.blogPost.id, data);
    this.props.router.push("/");
  },

  render() {
    return (
      <div>
        <Form
          onSubmit={this.handleSubmit.bind(this)}
          title={this.state.blogPost.title}
          body={this.state.blogPost.body}
        />
      </div>
    );
  }
});

export default Update;
