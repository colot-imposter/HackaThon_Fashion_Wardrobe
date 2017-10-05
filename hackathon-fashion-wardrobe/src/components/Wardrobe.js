import React, { Component } from "react";
import WardrobeDisplay from "../containers/WardrobeDisplay.js";
import users from "../data/userData.js";


let clothesstyle =  {
display:"flex",
flexDirection:"row",
};

let filterstyle =  {
display:"flex",
fontFamily:"Ubuntu, sans-serif",
flexDirection:"column",
paddingRight:'105px',
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

let imgstyle =  {
display:"flex",
flexDirection:"row",
width:'600px',
flexWrap:"wrap",
padding:"20px"
};

export default class Wardrobe extends Component {
  constructor(props) {
      super(props);

  this.state = {
    clothingItem: [],
  }

      this.LengthFilter = this.LengthFilter.bind(this);
      // this.WeightFilter = this.WeightFilter.bind(this);
      // this.ColorFilter = this.ColorFilter.bind(this);

}

LengthFilter(e) {
  this.setState(
    {
      clothingItem: e.target.value,
    })
}

  render() {

    // users.map(clothingItem) => {
    //    if (clothingItem === "short")
    //    console.log('hit1');
    //   return( <WardrobeDisplay key={clothingItem.image} clothingItem={clothingItem.sleeves.short}/>
    // })

    return (


        <div className='page' style={pagestyle}>
          <div className='filters' style={filterstyle}>
           <h3>Filter</h3>
           <form>
             <a onClick={this.LengthFilter} value="short">Sleeve Length</a>
            <br></br>
             <a onClick={this.WeightFilter}>Item Weight</a>
             <br></br>
             <a onClick={this.ColorFilter}>Color</a>
             </form>
           </div>
          <div className='clothingpreview'style={imgstyle}>
          {users.map(pop => {
             if (pop.sleeves === "short"){
            return <div style={{width:"100px",padding:"10px"}}><WardrobeDisplay key={pop.image} clothingItem={pop}/></div>;
          }}
        )}
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
