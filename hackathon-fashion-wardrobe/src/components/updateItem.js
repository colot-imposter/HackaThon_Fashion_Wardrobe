import React, { Component } from "react";
import Form from "./form";
import { fetchClothingItem, updateClothingItem } from "../actions/crud";

export default class updateItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clothingItem: {}
    };
  }

  componentDidMount() {
    fetchClothingItem(this.props.params.postId)
      .then(data => {
        this.setState(state => {
          state.clothingItem = data;
          return state;
        });
      })
      .catch(err => {
        console.error("err", err);
      });
  }

  handleSubmit(data) {
    updateClothingItem(this.state.blogPost.id, data);
    this.props.router.push("/");
  }

  render() {
    return (
      <div>
        <h1 className="updateForm">Update Item</h1>
        <Form className="updateForm"
          onSubmit={this.handleSubmit.bind(this)}
          title={this.state.clothingItem.name}
          body={this.state.clothingItem.fabricWeight}
        />
      </div>
    );
  }
}

// {this.props.clothingItem && this.props.clothingItem.map((post, i) => {
//                 return (
//                     <tr key={post.id}>
//                         <td>{post.id}</td>
//                         <td>{post.title}</td>
//                         <td>
//                             <Link to={`/posts/update/${post.id}`} className="btn btn-default btn-sm">Edit
//                           </Link>
//
//                             <btn onClick={this.deleteHandler.bind(this, i)}>
//                             Delete
//                           </btn>
//
//                         );
// })}
