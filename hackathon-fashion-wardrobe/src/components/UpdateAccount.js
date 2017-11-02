import React, { Component } from "react";
import { connect } from "react-redux";
import { register } from "../actions/actions";

class UpdateAccount extends Component {
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
    return (
      <div className="container">
        <div className="Register card">
          <form onSubmit={this.register}>
            <fieldset>
              <legend>
                {this.props.loggedIn
                  ? "Register as a different user"
                  : "Register"}
              </legend>
              <div className="input-single">
                <label>Email</label>
                <input
                  type="text"
                  value={this.state.email}
                  onChange={this.updateState("email")}
                />
              </div>
              <div className="input-single">
                <label>Full Name</label>
                <input
                  type="text"
                  value={this.state.full_name}
                  onChange={this.updateState("full_name")}
                />
              </div>
              <div className="input-single">
                <label>Message</label>
                <input
                  type="text"
                  value={this.state.message}
                  onChange={this.updateState("message")}
                />
              </div>
              <div className="input-single">
                <label>Password</label>
                <input
                  type="password"
                  value={this.state.password}
                  onChange={this.updateState("password")}
                />
              </div>

              <button type="submit">Register</button>
            </fieldset>
          </form>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(UpdateAccount);
