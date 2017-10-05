import React, { Component } from "react";
import users from "../data/userData.js";
import WardrobeDisplay from "../containers/WardrobeDisplay.js";

// const styles =  {
//   clothingpreview:{
//     display: 'inline-flex',
//     width: '10px',
//     // height: '50px',
//     border: '1px solid black',
//     padding: '5px'},
//   previewbody:{
//     display:'inline-flex'
//   },
//     header: {
//       'margin-left': 'auto',
//       border: '1px solid black'
//     },
// };



export default class Wardrobe extends Component {
  // constructor(props) {
  //     super(props);
  render() {
    return (
        <div>
          {users.map(clothingItem => {
            if (clothingItem.image === "black-longsleeve-light.jpeg")
              return <WardrobeDisplay key={clothingItem.image} clothingItem={clothingItem} />;
            })}
          <br />
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
