import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../actions/actions";
import UserInfo from "./UserInfo.js";
import Register from "./Register.js";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  updateState = field => {
    return event => {
      this.setState({ [field]: event.target.value });
    };
  };

  login = event => {
    event.preventDefault();

    const login = this.props.login;
    login(this.state.email, this.state.password, () => {
      this.setState({
        email: "",
        password: ""
      });
    });
  };

  render() {
    let style={
      color:"#837095",

    }
    let formStyle={
      border: "none",
      webkitBoxShadow: "none ",
      mozBoxShadow: "none ",
      boxShadow: "none",
      color:"#837095",
      paddingRight:"60px"
    }
    let inputStyle={
      border:"none",
      borderBottomColor:"#837095",
      borderBottomStyle:"solid",
      marginBottom:"15px",
      textAlign:"center",
      display:"flex",
      justifyContent:"center",
      alignContent:"center",
      fontSize:"20px"
    }
    let fontStyle={
      fontSize:"30px",
      paddingBottom:"10px",
      paddingTop:"10px"
    }
    let allStyle ={
      display:"flex",
      flexDirection:"row",
      justifyContent:"center",
      alignContent:"center",
      paddingTop:"40px",
    }

    return (
      <div style = {allStyle}className="Login">
        <div>
          <UserInfo />
        </div>
        <form onSubmit={this.login}>
          <fieldset style={formStyle}>
            <legend style={fontStyle}>
              {this.props.loggedIn ? "Log in as a different user" : "Log in"}
            </legend>
            <div className="input-single">
              <label>Email</label>
              <input style={inputStyle}
                type="text"
                value={this.state.email}
                onChange={this.updateState("email")}
              />
            </div>
            <div className="input-single">
              <label>Password</label>
              <input style={inputStyle}
                type="password"
                value={this.state.password}
                onChange={this.updateState("password")}
              />
            </div>

            <button style={style} type="submit">Login</button>
          </fieldset>
        </form>
        <div>
          <Register />
        </div>
        <br />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: !!state.token
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: (username, password, callback) =>
      dispatch(login(username, password, callback))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
