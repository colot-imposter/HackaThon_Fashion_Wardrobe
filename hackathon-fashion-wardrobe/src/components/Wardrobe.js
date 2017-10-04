import React, { Component } from "react";
import Link from

export default class Wardrobe extends Component {
  render() {
    return (
    <div>
      <div className="steps">
        <h1>Wardrobe</h1>
      </div>
      <div className= 'previewbody' style= {styles.previewbody}>
        <div>
          <h3>Filter</h3>
            <Link to="/" onClick={this.handleClickForLengthFilter}>Sleeve Length</Link>
            <br></br>
            <Link to="/" onClick={this.handleClickForLengthFilter}>Item Weight</Link>
            <br></br>
            <Link onClick={this.handleClickForLengthFilter}>Color</Link>
          </div>
        <div className="todaypreview" style={styles.clothingpreview}>
          <img
          src="http://i3.cpcache.com/product/606802989/unicorn_kids_dark_tshirt.jpg?color=Navy&height=460&width=460&qv=90&Filters="
          alt="unicorn shirt"
        />
          <img
          src="https://i.ebayimg.com/thumbs/images/m/mf3_QAnDftcZvIljSorxC2g/s-l225.jpg"
          alt="yellow top"
        />
          <img
          src="https://cdn-img-2.wanelo.com/p/665/4d5/377/0da4e007e21051127aa5901/x354-q80.jpg"
          alt="here for the boos"
        />
        </div>
      </div>
    </div>
    );
  }
}
