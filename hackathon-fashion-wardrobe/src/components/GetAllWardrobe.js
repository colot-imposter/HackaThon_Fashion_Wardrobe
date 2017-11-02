import React, { Component } from "react";
import { Link } from "react-router-dom";

import img1 from "../styles/imgs/shirts/img1.JPG";
import img2 from "../styles/imgs/shirts/img2.JPG";
import img3 from "../styles/imgs/shirts/img3.JPG";
import img4 from "../styles/imgs/shirts/img4.JPG";
import img5 from "../styles/imgs/shirts/img5.JPG";
import img6 from "../styles/imgs/shirts/img6.JPG";
import img7 from "../styles/imgs/shirts/img7.JPG";
import img8 from "../styles/imgs/shirts/img8.JPG";
import img9 from "../styles/imgs/shirts/img9.JPG";
import img10 from "../styles/imgs/shirts/img10.JPG";

import Modal from "./Modal";

const shirtImage = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10
];

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
        <div className="item">
          <li>
            <h3>{item.name}</h3>
            <span>{item.color}</span>
            <img className="wardrobeImages" src={shirtImage[index]} />

            <Modal index={item} />
          </li>
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
