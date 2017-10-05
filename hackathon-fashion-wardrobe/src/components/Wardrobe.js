import React, { Component } from "react";

const styles =  {
  clothingpreview:{
    display: 'inline-flex',
    width: '10px',
    // height: '50px',
    border: '1px solid black',
    padding: '5px'},
  previewbody:{
    display:'inline-flex'
  },
    header: {
      'margin-left': 'auto',
      border: '1px solid black'
    },
  //
  //   '@media (max-width: 200px)': {
  //     width: '100%',
  //
  //     ':hover': {
  //       background: 'white',
  //     }
  //   }
  // },
  // primary: {
  //   background: 'green'
  // },
  // warning: {
  //   background: 'yellow'

};

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
            <a to="/" onClick={this.handleClickForLengthFilter}>Sleeve Length</a>
            <br></br>
            <a to="/" onClick={this.handleClickForLengthWeight}>Item Weight</a>
            <br></br>
            <a onClick={this.handleClickForColorFilter}>Color</a>
          </div>
        <div className="todaypreview" style={styles.clothingpreview}>
          <img
          src="http://i3.cpcache.com/product/606802989/unicorn_kids_dark_tshirt.jpg?color=Navy&height=460&width=460&qv=90&Filters="
          alt="unicorn shirt"
        />
        </div>
      </div>
    </div>
    );
  }
}
