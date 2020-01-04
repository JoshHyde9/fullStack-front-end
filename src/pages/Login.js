import React, { Component } from "react";

// Styles
import M from "materialize-css";

export default class Login extends Component {
  componentDidMount() {
    M.AutoInit();
  }

  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
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

    fetch(`${API_URL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    })
      .then(res => {
        return res.json();
      })
      .then(data => {
        if (data.error) {
          return M.toast({ html: data.error, classes: "rounded red darken-4" });
        } else {
          this.props.history.push("/");
          localStorage.token = data.token;
          return M.toast({
            html: data.success,
            classes: "rounded green darken-4"
          });
        }
      })
      .catch(err => {
        return console.error(err);
      });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <form className="col s12" onSubmit={this.handleSubmit}>
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
            <div className="row">
              <div className="input-field col s12">
                <input
                  id="password"
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                  className="validate"
                />
                <label htmlFor="password">Password:</label>
              </div>
            </div>
            <button className="btn waves-effect waves-light" type="submit">
              Login
              <i className="material-icons right">send</i>
            </button>
          </form>
        </div>
      </div>
    );
  }
}
