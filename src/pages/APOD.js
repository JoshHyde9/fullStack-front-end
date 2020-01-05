import React, { Component } from "react";

// Materialize JS
import M from "materialize-css";

const API_URL = `https://enigmatic-fjord-24728.herokuapp.com/api/v1/nasa/apod`;

export default class APOD extends Component {
  componentDidMount() {
    M.AutoInit();

    fetch(API_URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        return this.setState(data);
      })
      .catch(error => {
        console.error(error);
      });
  }

  constructor(props) {
    super(props);

    this.state = {
      datepicker: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ datepicker: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ datepicker: this.state.datepicker })
    })
      .then(result => {
        return result.json();
      })
      .then(data => {
        return this.setState(data);
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    return (
      <>
        <h1 className="header center-align">
          Astronomy Picture Of the Day - {this.state.date}
        </h1>
        <div className="row container">
          <div className="col xl6 s12">
            <img className="responsive-img" src={this.state.hdurl} alt="" />
          </div>
          <div className="col xl6 s12">
            <h2 className="header center-align">{this.state.title}</h2>
            <p className="grey-text text-darken-3 lighten-3">
              {this.state.explanation}
            </p>
          </div>
        </div>

        <form onSubmit={this.handleSubmit}>
          <div className="container">
            <div className="row">
              <div className="input-field col xl6 s12">
                <input
                  name="apodDate"
                  type="date"
                  placeholder="Date"
                  id="date"
                  value={this.state.datepicker}
                  onChange={this.handleChange}
                />
                <label htmlFor="date">Or pick your own day: </label>
              </div>
            </div>
            <div className="row">
              <button className="btn waves-effect waves-light" type="submit">
                Submit
                <i className="material-icons right">send</i>
              </button>
            </div>
          </div>
        </form>
      </>
    );
  }
}
