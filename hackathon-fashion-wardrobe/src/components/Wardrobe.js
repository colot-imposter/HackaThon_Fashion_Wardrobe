import React, { Component } from "react";
import WardrobeDisplay from "../containers/WardrobeDisplay.js";
import users from "../data/userData.js";
import GetAllWardrobe from "./GetAllWardrobe";

let clothesstyle = {
  display: "flex",
  flexDirection: "row"
};

let filterstyle = {
  display: "flex",
  fontFamily: "Ubuntu, sans-serif",
  flexDirection: "column",
  paddingRight: "105px",
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

let imgstyle = {
  display: "flex",
  flexDirection: "row",
  width: "600px",
  flexWrap: "wrap",
  padding: "20px"
};

let dropdown = {
  fontFamily: "Ubuntu, sans-serif",
  color: "#837095",
  fontSize: "15px"
};

export default class Wardrobe extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clothingItem: []
    };

    this.LengthFilter = this.LengthFilter.bind(this);
    this.WeightFilter = this.WeightFilter.bind(this);
    this.ColorFilter = this.ColorFilter.bind(this);
  }

  LengthFilter(e) {
    this.setState({
      sleeves: e.target.value
    });
    console.log("clothingItem", e.target.value);
  }
  WeightFilter(e) {
    this.setState({
      weight: e.target.value
    });
  }

  ColorFilter(e) {
    this.setState({
      color: e.target.value
    });
  }

  render() {
    // users.map(clothingItem) => {
    //    if (clothingItem === "short")
    //    console.log('hit1');
    //   return( <WardrobeDisplay key={clothingItem.image} clothingItem={clothingItem.sleeves.short}/>
    // })

    return (
      <div className="page" style={pagestyle}>
        <GetAllWardrobe />
        <div className="filters" style={filterstyle}>
          <h3>Filter</h3>
          <form>
            <select
              onChange={this.LengthFilter}
              id="sleevelength"
              value={this.state.value}
              style={dropdown}
            >
              <option value="">Sleeve Length</option>
              <option value="short">Short</option>
              <option value="long">Long</option>
              <option value="none">None</option>
            </select>
            <br />
            <select
              onChange={this.WeightFilter}
              id="WeightFilter"
              value={this.state.value}
              style={dropdown}
            >
              <option value="">Fabric Weight</option>
              <option value="light">Light</option>
              <option value="medium">Medium</option>
              <option value="heavy">Heavy</option>
            </select>
            <br />
            <select
              onChange={this.ColorFilter}
              id="color"
              value={this.state.value}
              style={dropdown}
            >
              <option value="">Color</option>
              <option value="blue">Blue</option>
              <option value="black">Black</option>
              <option value="gray">Gray</option>
              <option value="white">White</option>
              <option value="red">Red</option>
            </select>
            <br />
          </form>
        </div>
        <div className="clothingpreview" style={imgstyle}>
          {/* map over the data to filter out the desired selection */}

          {users.map(pop => {
            if (
              pop.color === this.state.color &&
              pop.sleeves === this.state.sleeves &&
              pop.weight === this.state.weight
            ) {
              console.log("popooooooo", this.state.color);

              return (
                <div style={{ width: "100px", padding: "10px" }}>
                  <WardrobeDisplay key={pop.image} clothingItem={pop} />
                </div>
              );
            } else if (pop.sleeves === this.state.sleeves) {
              return (
                <div style={{ width: "100px", padding: "10px" }}>
                  <WardrobeDisplay key={pop.image} clothingItem={pop} />
                </div>
              );
            } else if (pop.weight === this.state.weight) {
              return (
                <div style={{ width: "100px", padding: "10px" }}>
                  <WardrobeDisplay key={pop.image} clothingItem={pop} />
                </div>
              );
            } else if (this.state.weight === "") {
              return;
              <div style={{ width: "100px", padding: "10px" }}>
                <WardrobeDisplay key={pop.image} clothingItem={pop} />
              </div>;
            }
          })}
        </div>
      </div>
    );
  }
}

// export default class Wardrobe extends Component {
//   constructor(props) {
//       super(props);
//       this.state = {
//           images: []
//       }
//   }
//
//
//
//   componentWillMount = () => {
//     this.setState({images: [this.props.images]}, function () {
//       this.props.updatedWardrobe(this.state.images);
//     })
//   }

//   render() {
//     return (
//     <div>
//       <div className="steps">
//         <h1>Wardrobe</h1>
//       </div>
//       <div className= 'previewbody' style= {styles.previewbody}>
//         <div>
//           <h3>Filter</h3>
//             <a to="/" onClick={this.handleClickForLengthFilter}>Sleeve Length</a>
//             <br></br>
//             <a to="/" onClick={this.handleClickForLengthWeight}>Item Weight</a>
//             <br></br>
//             <a onClick={this.handleClickForColorFilter}>Color</a>
//           </div>
//           <div>
//             <ImageDisplay />
// />          </div>
//         <div className="todaypreview" style={styles.clothingpreview}>
//           <img
//           src="http://i3.cpcache.com/product/606802989/unicorn_kids_dark_tshirt.jpg?color=Navy&height=460&width=460&qv=90&Filters="
//           alt="unicorn shirt"
//         />
//         </div>
//       </div>
//     </div>
//     );
//   }
// }
