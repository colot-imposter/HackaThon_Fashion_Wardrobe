import React, { Component } from "react";
import { connect } from "react-redux";

import Login from "../containers/Login.js";
import Register from "../containers/Register.js";
import UserInfo from "../containers/UserInfo.js";
import apiKey from './apiKey';

import { loadTokenFromCookie } from "../actions/actions";

const API_KEY = apiKey;
console.log(API_KEY);
const countrycode = 'us';
const zipcode = '78701';

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

export default class TodaysLook extends Component {
  constructor(props){
    super(props);

    this.state = {
      temperature: "",
    }

  let weather_temperature = `api.openweathermap.org/data/2.5/weather?zip=${zipcode},${countrycode}`;

  fetch(weather_temperature)
    .then(r => r.json())
    .then((data) => {
      console.log(data.main.temp)
      this.setState({
        temperature: data.main.temp
      });
    })
  }

  render() {
    return (
      <div className="todaysWeather">
        <div className="header">
          <h1>Today's Weather</h1>
        </div>
        <div>
          {/* <p>{api.temperatureInFarhenheit}</p> */}
          <img
            src="https://thesunshine.co/assets/img/sun.png"
            alt="Its Sunny!"
          />
        </div>
        <div className= 'previewbody' style= {styles.previewbody}>
          <div>
            <h3>Filter</h3>
              <a to="/" onClick={this.handleClickForLengthFilter}>Sleeve Length</a>
              <br></br>
              <a to="/" onClick={this.handleClickForLengthFilter}>Item Weight</a>
              <br></br>
              <a onClick={this.handleClickForLengthFilter}>Color</a>
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
// class App extends Component {
//   componentWillMount() {
//     const loadToken = this.props.loadToken;
//     loadToken();
//   }
//   render() {
//     return (
//       <div className="App">
//         <div className="grid-50-50">
//           <h1>Youre About to Have a Nice Wardrobe</h1>
//         </div>
//       </div>
//     );
//   }
// }

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
