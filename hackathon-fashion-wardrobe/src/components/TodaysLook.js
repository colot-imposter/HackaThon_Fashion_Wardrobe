import React, { Component } from "react";
import { connect } from "react-redux";

import Login from "../containers/Login.js";
import Register from "../containers/Register.js";
import UserInfo from "../containers/UserInfo.js";
import apiKey from './apiKey';
import img1 from '../styles/imgs/shirts/blue-shortsleeve-light.jpeg'
import img2 from '../styles/imgs/shirts/white-sleevless-light.jpeg'
import img3 from '../styles/imgs/shirts/black-shortsleeve-light.jpeg'

import { loadTokenFromCookie } from "../actions/actions";

const API_KEY = apiKey;
console.log(API_KEY);
const countrycode = 'us';
const zipcode = '78701';

let clothesstyle =  {
display:"flex",
flexDirection:"row",
};

let tempstyle =  {
display:"flex",
flexDirection:"row-reverse",
justifyContent:"end",
color:"#837095",
fontFamily:"Ubuntu, sans-serif",
};

let headstyle =  {
display:"flex",
flexDirection:"column",
color:"#837095",
fontFamily:"Ubuntu, sans-serif",
paddingRight:"20px"
};

let filterstyle =  {
display:"flex",
fontFamily:"Ubuntu, sans-serif",
flexDirection:"column",
paddingRight:'155px',
color:"#837095",
fontSize:"20px"
};

let pagestyle =  {
display:"flex",
flexDirection:"row",
padding:'20px',
alignItems:"center",
alignText:"center",
justifyContent:"center"
};
export default class TodaysLook extends Component {
  constructor(props){
    super(props);

    this.state = {
      temperature: "",
    }

}
    componentDidMount() {

      let url = `http://api.openweathermap.org/data/2.5/weather?q= austin,${countrycode}&appid=${API_KEY}`;

        fetch(url)
          .then(r => r.json())
          .then((data) => {
            console.log(data);
            console.log(data.main.temp)
            this.setState({temperature: data.main.temp})
      })
    }


  // let weather_temperature = `api.openweathermap.org/data/2.5/weather?zip=${zipcode},${countrycode}`;

  // fetch(weather_temperature)
    // .then(r => r.json())
    // .then((data) => {
  //     console.log(data.main.temp)
  //     this.setState({
  //       temperature: data.main.temp
  //     });
  //   })

  render() {

    return (
      <div className="todaysWeather">
      <div className="weather" style={tempstyle}>
        <div className="header" style={headstyle}>
          <h1>Todays Weather</h1>
        <div style={{paddingLeft:"20px",paddingRight:"20px", paddingTop:"0px"}}>
        <h2>{this.state.temperature}</h2>
        </div>
        </div>
        <div>
          <img style={{width:"75px", paddingRight:"20px"}}
            src="https://thesunshine.co/assets/img/sun.png"
            alt="Its Sunny!"/>
        </div>
        </div>
        <div className= 'previewbody' style={pagestyle}>
        <div className='filters' style={filterstyle}>
         <h3>Filter</h3>
           <a onClick={this.LengthFilter}>Sleeve Length</a>
          <br></br>
           <a onClick={this.WeightFilter}>Item Weight</a>
           <br></br>
           <a onClick={this.ColorFilter}>Color</a>
         </div>
          <div className="todaypreview" style={clothesstyle}>
            <img style={{width:"200px", height:"200px"}}
            src={img1}
            alt="blue-shortsleeve-light"
          />
            <img style={{width:"200px", height:"200px"}}
            src={img2}
            alt="white-sleevless-light"
          />
            <img style={{width:"200px", height:"200px"}}
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
