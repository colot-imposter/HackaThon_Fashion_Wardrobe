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

import { loadTokenFromCookie } from "../actions/actions";

const API_KEY = apiKey;
console.log(API_KEY);
const countrycode = "us";
const zipcode = "78704";

let tempstyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent:"center"
};

let headstyle = {
  display: "flex",
  flexDirection: "column",
  color: "#837095",
  fontFamily: "Ubuntu, sans-serif",
  paddingRight: "20px",
  justifyContent:"center"
};

export default class Weather extends Component {
  constructor(props) {
    super(props);

    this.state = {
      temperature: "",
      conditions: "",
    };
  }

  componentDidMount() {
    let url = `https://api.apixu.com/v1/forecast.json?key=${API_KEY}&q=${zipcode}`;

    fetch(url)
      .then(r => r.json())
      .then(data => {
        const feelsLikeT = data.current.feelslike_f;
        const maxT = data.forecast.forecastday["0"].day.maxtemp_f;
        const minT = data.forecast.forecastday["0"].day.mintemp_f;
        const avgT = data.forecast.forecastday["0"].day.avgtemp_f;
        const rainInches = data.forecast.forecastday["0"].day.totalprecip_in;
        const city = data.location.name;
        const state = data.location.region;

        console.log(data);
        console.log("feelsLikeT", feelsLikeT);
        console.log("Full data", data);
        console.log("maxT", maxT);
        console.log("avgT", avgT);
        console.log("total precipation expected", rainInches);

        this.setState({
          temperature: avgT.toFixed(0),
          feelsLikeTemp: feelsLikeT.toFixed(0),
          conditions: data.current.condition.text,
          highTemp: maxT.toFixed(0),
          lowTemp: minT.toFixed(0),
          city: city,
          state: state
        });
      });
  }
  render(){
    return(
      <div className="weather" style={headstyle}>
      <h2 style={tempstyle}> Weather In {this.state.city} {this.state.state}</h2>
      <h2 style={tempstyle}> Currnet Temperature: {this.state.temperature} Degrees</h2>
      <h3 style={tempstyle}>Feels Like:  {this.state.feelsLikeTemp} Degrees</h3>
      <h3 style={tempstyle}> Conditions Outside: {this.state.conditions} </h3>
      <h3 style={tempstyle}> Todays High: {this.state.highTemp} Degrees</h3>
      <h3 style={tempstyle}> Todays Low: {this.state.lowTemp} Degrees</h3>
      </div>
    )
  }
}
