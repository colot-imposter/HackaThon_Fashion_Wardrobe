import React, { Component } from "react";
import Form from "./form";

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

        <Form />

        <button>Delete Item</button>
      </div>
    );
  }
}
