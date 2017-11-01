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

export default class Weather extends Component {
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
        const minT = data.forecast.forecastday["0"].day.mintemp_f;
        const avgT = data.forecast.forecastday["0"].day.avgtemp_f;
        const rainInches = data.forecast.forecastday["0"].day.totalprecip_in;
        const city = data.location.name;
        const state = data.location.region;
        const sun = data.forecast.forecastday["0"].astro.sunset;
        const hour6 = data.forecast.forecastday["0"].hour[6].temp_f;
        const hour7 = data.forecast.forecastday["0"].hour[7].temp_f;
        const hour8 = data.forecast.forecastday["0"].hour[8].temp_f;
        const hour9 = data.forecast.forecastday["0"].hour[9].temp_f;
        const hour10 = data.forecast.forecastday["0"].hour[10].temp_f;
        const hour11 = data.forecast.forecastday["0"].hour[11].temp_f;
        const hour12 = data.forecast.forecastday["0"].hour[12].temp_f;
        const hour13 = data.forecast.forecastday["0"].hour[13].temp_f;
        const hour14 = data.forecast.forecastday["0"].hour[14].temp_f;
        const hour15 = data.forecast.forecastday["0"].hour[15].temp_f;
        const hour16 = data.forecast.forecastday["0"].hour[16].temp_f;
        const hour17 = data.forecast.forecastday["0"].hour[17].temp_f;
        const hour18 = data.forecast.forecastday["0"].hour[18].temp_f;
        const hour19 = data.forecast.forecastday["0"].hour[19].temp_f;

        console.log("Full data", data);

        this.setState({
          temperature: avgT.toFixed(0),
          feelsLikeTemp: feelsLikeT.toFixed(0),
          conditions: data.current.condition.text,
          highTemp: maxT.toFixed(0),
          lowTemp: minT.toFixed(0),
          city: city,
          state: state,
          sunset: sun,
          hour6: hour6.toFixed(0),
          hour7: hour7.toFixed(0),
          hour8: hour8.toFixed(0),
          hour9: hour9.toFixed(0),
          hour10: hour10.toFixed(0),
          hour11: hour11.toFixed(0),
          hour12: hour12.toFixed(0),
          hour13: hour13.toFixed(0),
          hour14: hour14.toFixed(0),
          hour15: hour15.toFixed(0),
          hour16: hour16.toFixed(0),
          hour17: hour17.toFixed(0),
          hour18: hour18.toFixed(0),
          hour19: hour19.toFixed(0)
        });
      });
  }
  render() {
    return (
      <div className="weather">
        <h2 className="tempstyle">
          {" "}
          Weather In {this.state.city},{this.state.state}
        </h2>
        <div className="weatherOneTwo">
          <div className="weatherOne">
            <h3 className="tempstyle">
              {" "}
              Current Temperature: {this.state.temperature}°
            </h3>
            <h3 className="tempstyle">
              Feels Like: {this.state.feelsLikeTemp}°
            </h3>
            <h3 className="tempstyle">
              {" "}
              Conditions Outside: {this.state.conditions}{" "}
            </h3>
          </div>
          <div className="weatherTwo">
            <h3 className="tempstyle"> Today's High: {this.state.highTemp}°</h3>
            <h3 className="tempstyle"> Today's Low: {this.state.lowTemp}°</h3>
            <h3 className="tempstyle"> Sunset: {this.state.sunset}</h3>
          </div>
        </div>
        <h3 className="tempstyle"> Hourly Forecast </h3>
        <div className="timeHead">
          <div className="morning">
            <h4 className="timestyle">
              {" "}
              6 am<br />
              {this.state.hour6}°
            </h4>
            <h4 className="timestyle">
              {" "}
              7 am<br />
              {this.state.hour7}°
            </h4>
            <h4 className="timestyle">
              {" "}
              8 am<br />
              {this.state.hour8}°
            </h4>
            <h4 className="timestyle">
              {" "}
              9 am<br />
              {this.state.hour9}°
            </h4>
            <h4 className="timestyle">
              {" "}
              10 am<br />
              {this.state.hour10}°
            </h4>
            <h4 className="timestyle">
              {" "}
              11 am<br />
              {this.state.hour11}°
            </h4>
            <h4 className="timestyle">
              {" "}
              12 pm<br />
              {this.state.hour12}°
            </h4>
          </div>
          <div className="afternoon">
            <h4 className="timestyle">
              {" "}
              1 pm<br />
              {this.state.hour13}°
            </h4>
            <h4 className="timestyle">
              {" "}
              2 pm<br />
              {this.state.hour14}°
            </h4>
            <h4 className="timestyle">
              {" "}
              3 pm<br />
              {this.state.hour15}°
            </h4>
            <h4 className="timestyle">
              {" "}
              4 pm<br />
              {this.state.hour16}°
            </h4>
            <h4 className="timestyle">
              {" "}
              5 pm<br />
              {this.state.hour17}°
            </h4>
            <h4 className="timestyle">
              {" "}
              6 pm<br />
              {this.state.hour18}°
            </h4>
            <h4 className="timestyle">
              {" "}
              7 pm<br />
              {this.state.hour19}°
            </h4>
          </div>
        </div>
      </div>
    );
  }
}
