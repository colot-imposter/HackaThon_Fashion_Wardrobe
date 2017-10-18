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

import { loadTokenFromCookie } from "../actions/actions";

const API_KEY = apiKey;
console.log(API_KEY);
const countrycode = "us";
const zipcode = "78704";

let clothesstyle = {
  display: "flex",
  flexDirection: "row"
};

let tempstyle = {
  display: "flex",
  flexDirection: "row-reverse",
  justifyContent: "end",
  color: "#837095",
  fontFamily: "Ubuntu, sans-serif",
  paddingTop: 20
};

let headstyle = {
  display: "flex",
  flexDirection: "column",
  color: "#837095",
  fontFamily: "Ubuntu, sans-serif",
  paddingRight: "20px"
};

let filterstyle = {
  display: "flex",
  fontFamily: "Ubuntu, sans-serif",
  flexDirection: "column",
  paddingRight: "155px",
  color: "#837095",
  fontSize: "20px"
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
      conditions: ""
    };
  }

  componentDidMount() {
    let url = `https://api.apixu.com/v1/forecast.json?key=${API_KEY}&q=${zipcode}`;

    fetch(url)
      .then(r => r.json())
      .then(data => {
        const feelsLikeT = data.current.feelslike_f;
        const maxT = data.forecast.forecastday["0"].day.maxtemp_f;
        const avgT = data.forecast.forecastday["0"].day.avgtemp_f;
        const rainInches = data.forecast.forecastday["0"].day.totalprecip_in;
        console.log("feelsLikeT", feelsLikeT);
        console.log("Full data", data);
        console.log("maxT", maxT);
        console.log("avgT", avgT);
        console.log("total precipation expected", rainInches);

        this.setState({
          temperature: avgT.toFixed(0),
          feelsLikeTemp: feelsLikeT,
          conditions: data.current.condition.text
        });
      });
  }

  render() {
    return (
      <div className="todaysWeather">
        <div className="weather" style={tempstyle}>
          <div className="header" style={headstyle}>
            <h1>Todays Weather</h1>
            <div
              style={{
                paddingLeft: "20px",
                paddingRight: "20px",
                paddingTop: "0px"
              }}
            >
              <h2>{this.state.temperature} Degrees</h2>
              <h3>Feels Like {this.state.feelsLikeTemp}</h3>
              <h2>{this.state.conditions}</h2>
              <Modal />
            </div>
          </div>
          <div>
            <img
              style={{ width: "75px", paddingRight: "20px" }}
              src="https://thesunshine.co/assets/img/sun.png"
              alt="Its Sunny!"
            />
          </div>
        </div>
        <div className="previewbody" style={pagestyle}>
          <div className="todaypreview" style={clothesstyle}>
            <img
              style={{ width: "200px", height: "200px", paddingRight: "40px" }}
              src={img1}
              alt="blue-shortsleeve-light"
            />
            <img
              style={{ width: "200px", height: "200px", paddingRight: "40px" }}
              src={img2}
              alt="white-sleevless-light"
            />
            <img
              style={{ width: "200px", height: "200px", paddingRight: "40px" }}
              src={img3}
              alt="black-shortsleeve-light"
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
