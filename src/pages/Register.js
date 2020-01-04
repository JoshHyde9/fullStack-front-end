import React, { Component } from "react";

// Styles
import M from "materialize-css";

export default class Register extends Component {
  componentDidMount() {
    M.AutoInit();
  }

  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      password2: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    let partialState = {};
    partialState[name] = value;
    this.setState(partialState);
  }

  handleSubmit(e) {
    e.preventDefault();
    const API_URL = "http://localhost:5000/api/v1";

    fetch(`${API_URL}/users/register`, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(this.state)
    })
      .then(res => res.json())
      .then(data => {
        if (data.error) {
          M.toast({ html: data.error, classes: "rounded red darken-4" });
        } else {
          M.toast({ html: data.success, classes: "rounded green darken-4" });
          this.props.history.push("/");
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <form className="col s12" onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="input-field col s6">
                <input
                  id="first_name"
                  type="text"
                  name="firstName"
                  value={this.state.firstName}
                  onChange={this.handleChange}
                  className="validate"
                />
                <label htmlFor="first_name">First Name:</label>
              </div>
              <div className="input-field col s6">
                <input
                  id="last_name"
                  name="lastName"
                  type="text"
                  value={this.state.lastName}
                  onChange={this.handleChange}
                  className="validate"
                />
                <label htmlFor="last_name">Last Name:</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s6">
                <input
                  id="password"
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                  className="validate"
                />
                <label htmlFor="password">Password:</label>
                <span
                  className="helper-text"
                  data-error="wrong"
                  data-success="right"
                >
                  Password must be at least 6 characters long
                </span>
              </div>
              <div className="input-field col s6">
                <input
                  id="password2"
                  name="password2"
                  type="password"
                  value={this.state.password2}
                  onChange={this.handleChange}
                  className="validate"
                />
                <label htmlFor="password2">Confirm Password:</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  className="validate"
                />
                <label htmlFor="email">Email:</label>
              </div>
            </div>
            <button
              className="btn waves-effect waves-light"
              value="Submit"
              type="submit"
            >
              Register
              <i className="material-icons right">send</i>
            </button>
          </form>
        </div>
      </div>
    );
  }
}
