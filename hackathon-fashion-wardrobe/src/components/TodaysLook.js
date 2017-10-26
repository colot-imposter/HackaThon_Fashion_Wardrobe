import React, { Component } from "react";
import { connect } from "react-redux";

import Login from "../containers/Login.js";
import Register from "../containers/Register.js";
import UserInfo from "../containers/UserInfo.js";
import apiKey from "./apiKey";
import MatchTodaysLook from "./MatchTodaysLook.js";
import img1 from "../styles/imgs/shirts/blue-shortsleeve-light.jpeg";
import img2 from "../styles/imgs/shirts/white-sleevless-light.jpeg";
import img3 from "../styles/imgs/shirts/black-shortsleeve-light.jpeg";
import Modal from "./Modal";
import newItem from "./newItem";
import UpdateItem from "./updateItem";

import { loadTokenFromCookie } from "../actions/actions";

const API_KEY = apiKey;
console.log(API_KEY);
const countrycode = "us";
const zipcode = "78704";

let clothesstyle = {
  display: "flex",
  flexDirection: "row"
};

let pagestyle = {
  display: "flex",
  flexDirection: "row",
  padding: "20px",
  alignItems: "center",
  alignText: "center",
  justifyContent: "center"
};

export default class TodaysLook extends Component {
  constructor(props) {
    super(props);

    this.state = {
      temperature: "",
      conditions: "",
      icon: ""
    };
  }

  componentDidMount() {
    let url = `https://api.apixu.com/v1/forecast.json?key=${API_KEY}&q=${zipcode}`;

    fetch(url)
      .then(r => r.json())
      .then(data => {
        const feelsLikeT = data.current.feelslike_f;
        const icon = data.current.condition.icon;
        const maxT = data.forecast.forecastday["0"].day.maxtemp_f;
        const avgT = data.forecast.forecastday["0"].day.avgtemp_f;
        const rainInches = data.forecast.forecastday["0"].day.totalprecip_in;

        console.log("feelsLikeT", feelsLikeT);
        console.log("Full data", data);
        console.log("maxT", maxT);
        console.log("avgT", avgT);
        console.log("total precipation expected", rainInches);
        console.log("icon", icon);

        this.setState({
          temperature: avgT.toFixed(0),
          feelsLikeTemp: feelsLikeT.toFixed(0),
          conditions: data.current.condition.text,
          icon: icon
        });
      });
  }

  render() {
    return (
      <div className="todaysWeather">
        <div className="todaysTemp">
          <div className="header" className="todaysLookHead">
            <a href="/weather" className="todaysWeatherStyle">
              Todays Weather
            </a>
            <div>
              <h2>{this.state.temperature}°</h2>
              <h3>Feels Like {this.state.feelsLikeTemp}°</h3>
            </div>
          </div>
          <div className="weatherIcon">
            <img
              src={this.state.icon}
              alt={this.state.conditions}
            />
          </div>
        </div>
        <div className="previewbody">
        <div className="suggest">
        <h2> Suggested For You</h2>
        </div>
          <div className="todaypreview">
            <div>
              <img
                style={{
                  width: "150px",
                  height: "150px",
                  paddingRight: "40px"
                }}
                src={img1}
                alt="blue-shortsleeve-light"
              />
              <Modal />
            </div>
            <div>
              <img
                style={{
                  width: "150px",
                  height: "150px",
                  paddingRight: "40px"
                }}
                src={img2}
                alt="white-sleevless-light"
              />
              <Modal />
            </div>
            <div>
              <img
                style={{
                  width: "150px",
                  height: "150px",
                  paddingRight: "40px"
                }}
                src={img3}
                alt="black-shortsleeve-light"
              />
              <Modal />
            </div>
          </div>
        </div>
        <div className="viewWardrobe">
        <a href="/Wardrobe">View Your Closet</a>
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
