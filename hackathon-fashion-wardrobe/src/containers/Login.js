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



    return (
      <div className="login">
        <div>
          <UserInfo />
        </div>
        <form onSubmit={this.login}>
          <fieldset className="loginForm">
            <legend  className="loginFont">
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

            <button className="loginButton" type="submit">Login</button>
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
