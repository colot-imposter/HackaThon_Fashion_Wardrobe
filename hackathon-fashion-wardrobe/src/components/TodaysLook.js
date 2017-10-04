import React, { Component } from "react";
import { connect } from "react-redux";

import Login from "../containers/Login.js";
import Register from "../containers/Register.js";
import UserInfo from "../containers/UserInfo.js";

import { loadTokenFromCookie } from "../actions/actions";

export default class TodaysLook extends Component {

  render() {
    return (
      <div className=>
        <div className="grid-50-50">
          <h1>Today's Weather</h1>
        </div>
        <div>
          <p>{api.temperatureInFarhenheit}</p>
          <img src='https://thesunshine.co/assets/img/sun.png' alt='It\'s Sunny!'></img>
        </div>
        <div>
          <h3>Filter</h3>
          <a onClick={this.handleClickForLengthFilter}>Sleeve Length</a>
          <a onClick={this.handleClickForLengthFilter}>Item Weight</a>
          <a onClick={this.handleClickForLengthFilter}>Color</a>
        </div>
        <div>
          <img src='http://i3.cpcache.com/product/606802989/unicorn_kids_dark_tshirt.jpg?color=Navy&height=460&width=460&qv=90&Filters=' alt='unicorn shirt'></img>
          <img src='https://i.ebayimg.com/thumbs/images/m/mf3_QAnDftcZvIljSorxC2g/s-l225.jpg' alt='yellow top'></img>
          <img src='https://cdn-img-2.wanelo.com/p/665/4d5/377/0da4e007e21051127aa5901/x354-q80.jpg' alt='here for the boos'></img>
        </div>
      </div>

    )
  }

class App extends Component {
  componentWillMount() {
    const loadToken = this.props.loadToken;
    loadToken();
  }
  render() {
    return (
      <div className="App">
        <div className="grid-50-50">
          <h1>Youre About to Have a Nice Wardrobe</h1>
        </div>
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   return {};
// };
//
// const mapDispatchToProps = dispatch => {
//   return {
//     loadToken: () => dispatch(loadTokenFromCookie())
//   };
// };
//
// export default connect(mapStateToProps, mapDispatchToProps)(App);
