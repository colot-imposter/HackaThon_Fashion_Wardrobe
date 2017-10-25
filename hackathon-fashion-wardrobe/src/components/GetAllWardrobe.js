import React, { Component } from "react";

export default class GetAllWardrobe extends Component {
  constructor(props) {
    super(props);

    this.state = {
      wardrobeItems: [],
      name: ""
    };
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    let url = "https://tunic-wardrobe-api.herokuapp.com/clothing/all";
    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({ wardrobeItems: data });
      });
  }

  //
  // componentDidMount() {
  //   fetch("https://tunic-wardrobe-api.herokuapp.com/clothing/all")
  //     .then(function(response) {
  //       return response.json();
  //     })
  //     .then(function(json) {
  //       console.log("this is", json);
  //       let wardrobeItems = json;
  //       console.log("wardrobeItems", wardrobeItems);
  //
  //       this.setState({ wardrobeItems: wardrobeItems });
  //     });
  // }

  // _________________;
  // componentDidMount() {
  //   fetch("https://swapi.co/api/vehicles/")
  //     .then(response => {
  //       return response.json();
  //     })
  //     .then(json => {
  //       let vehicles = json.results;
  //       console.log(vehicles);
  //       this.setState({ vehicles: vehicles });
  //     });
  // }
  // render() {
  //   let vehicleArray = this.state.vehicles;
  //   let vehicles = vehicleArray.map(vehicle => {
  //     return (
  //       <div key={vehicle.name} className = "col-md-4">
  //       <div className="card">
  //         <div className="card-block">
  //         <h4 className="card-title">Vehicle: {vehicle.name}</h4>
  //         <h5 className="card-subtitle mb-2 text-muted">Model: {vehicle.model}</h5>
  //         <div className="card">
  //         <div className="card-block">
  //           <h5 className="card-subtitle mb-2 text-muted">Specs</h5>
  //           <ul className="list-group list-group-flush">
  //           <li className="list-group-item">Manufacturer: {vehicle.manufacturer}</li>
  //           <li className="list-group-item">Class: {vehicle.vehicle_class}</li>
  //           <li className="list-group-item">Passengers: {vehicle.passengers}</li>
  //           <li className="list-group-item">Crew: {vehicle.crew}</li>
  //           <li className="list-group-item">Length: {vehicle.length}</li>
  //           <li className="list-group-item">Max Speed: {vehicle.max_atmosphering_speed}</li>
  //           <li className="list-group-item">Cargo Capacity: {vehicle.cargo_capacity}</li>
  //         </ul>
  //         </div>
  //         </div>
  //         </div>
  //         </div>
  //       </div>
  //     );
  //   });
  //_________________;

  render() {
    return (
      <div>
        <div className="wardrobeItems">
          <ul>{this.state.wardrobeItems}</ul>
        </div>
      </div>
    );
  }
}
