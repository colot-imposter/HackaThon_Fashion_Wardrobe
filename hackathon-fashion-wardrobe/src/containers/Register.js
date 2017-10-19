import React, { Component } from "react";
import { connect } from "react-redux";
import { register } from "../actions/actions";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      full_name: "",
      message: "",
      password: ""
    };
  }

  updateState = field => {
    return event => {
      this.setState({ [field]: event.target.value });
    };
  };

  register = event => {
    event.preventDefault();

    const register = this.props.register;
    register(this.state, () => {
      this.setState({
        email: "",
        full_name: "",
        message: "",
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
    return (
      <div style={formStyle} className="Register">
        <form style={formStyle} onSubmit={this.register}>
          <fieldset style={formStyle}>
            <legend style={fontStyle}>
              {this.props.loggedIn
                ? "Register as a different user"
                : "Register"}
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
              <label>Full Name</label>
              <input style={inputStyle}
                type="text"
                value={this.state.full_name}
                onChange={this.updateState("full_name")}
              />
            </div>
            <div className="input-single">
              <label>Message</label>
              <input style={inputStyle}
                type="text"
                value={this.state.message}
                onChange={this.updateState("message")}
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

            <button style={style} type="submit">Register</button>
          </fieldset>
        </form>
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
    register: (regInfo, callback) => dispatch(register(regInfo, callback))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
