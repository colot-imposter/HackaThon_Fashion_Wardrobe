import React, { Component } from "react";
import { Link } from "react-router-dom";

import Modal from "./Modal";

export default class GetAllWardrobe extends Component {
  constructor(props) {
    super(props);

    this.state = {
      wardrobeItems: [],
      name: ""
    };
    // this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    let url = "https://tunic-wardrobe-api.herokuapp.com/clothing/all";
    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log("data", data);

        // this.setState({ wardrobeItems: data });
        this.setState({ wardrobeItems: data });
        console.log("this.state.wardrobeItems", this.state.wardrobeItems);
      });
  }

  render() {
    let Items = this.state.wardrobeItems.map((item, index) => {
      return (
          <div>
          <li>{item.name}<br></br>{item.color}</li>
          <Modal index={item} />
        </div>
      );
    });
    return (
      <div className="wardrobeItems">
        <ul>{Items}</ul>
      </div>
    );
  }
}
