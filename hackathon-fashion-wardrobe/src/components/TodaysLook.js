import React, { Component } from "react";
import { connect } from "react-redux";

import Login from "../containers/Login.js";
import Register from "../containers/Register.js";
import UserInfo from "../containers/UserInfo.js";
import apiKey from "./apiKey";
import MatchTodaysLook from "./MatchTodaysLook.js";
import Modal from "./Modal";
import newItem from "./newItem";
import UpdateItem from "./updateItem";

import { fetchTodaysLook } from "../actions/crud";

import { loadTokenFromCookie } from "../actions/actions";

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
      temperature: undefined,
      feelsLikeTemp: undefined,
      conditions: "",
      icon: "",
      todaysLook: []
    };
    this.componentDidMount = this.componentDidMount.bind(this);
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
          feelsLikeTemp: parseInt(feelsLikeT.toFixed(0)),
          conditions: data.current.condition.text,
          icon: icon
        });
      });
    fetchTodaysLook("50").then(data => {
      this.setState({
        todaysLook: data
      });
      console.log("tjossdsd", data);
    });
  }

  render() {
    return (
      <div className="todaysWeather">
        <div className="todaysTemp">
          <div className="todaysLookHead">
            <div className="iconLink">
              <a href="/weather" className="todaysWeatherStyle">
                Todays Weather
              </a>
              <div className="weatherIcon">
                <img src={this.state.icon} alt={this.state.conditions} />
              </div>
            </div>
            <div>
              <h2>{this.state.temperature}°</h2>
              <h3>Feels Like {this.state.feelsLikeTemp}°</h3>
            </div>
            <div className="viewWardrobe">
              <a href="/Wardrobe">View Your Closet</a>
            </div>
          </div>
        </div>
        <div className="previewbody">
          <div className="suggest">
            <h2> Suggested For You</h2>
          </div>
          <div className="todaypreview">
            {this.state.todaysLook.map((pop, index) => {
              console.log(
                "type of feels like",
                typeof this.state.feelsLikeTemp
              );
              if (!pop) {
                return (
                  <h1>Go Shopping! You have no suitable clothes, darling!</h1>
                );
              } else
                return (
                  <div className="suggestedItem">
                    <h3>
                      {pop.name} <br /> {pop.color}
                    </h3>
                    <div>
                      {console.log("pop on todaysLook", pop)}
                      <img className="wardrobeImages" src={shirtImage[index]} />
                    </div>
                  </div>
                );
            })}
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
