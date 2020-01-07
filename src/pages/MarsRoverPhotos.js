import React, { Component } from "react";

import M from "materialize-css";

const API_URL =
  "https://enigmatic-fjord-24728.herokuapp.com/api/v1/nasa/mars-rover-photos";

export default class MarsRoverPhotos extends Component {
  componentDidMount() {
    M.AutoInit();
  }

  constructor(props) {
    super(props);

    this.state = {
      date: "",
      rover: "",
      loading: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  async handleSubmit(e) {
    e.preventDefault();

    await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    })
      .then(result => {
        return result.json();
      })
      .then(data => {
        if (data.error) {
          return M.toast({ html: data.error, classes: "rounded red darken-4" });
        }
        this.state.loading = true;
        return this.setState(data);
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    const marsRoverPhotos = [];
    const { photos } = this.state;

    if (this.state.loading) {
      for (const photo of photos) {
        marsRoverPhotos.push(photo.img_src);
      }
    }

    return (
      <>
        <h1 className="header center-align">Mars Rover Photos</h1>
        <div className="container">
          <div className="row">
            <form className="col s12" onSubmit={this.handleSubmit}>
              <div className="row">
                <div className="input-field col s12">
                  <select
                    name="rover"
                    value={this.state.rover}
                    onChange={this.handleChange}
                  >
                    <option value="" disabled defaultValue>
                      Choose your rover
                    </option>
                    <option value="curiosity">Curiosity</option>
                    <option value="opportunity">Opportunity</option>
                    <option value="spirit">Spirit</option>
                  </select>
                  <label>Rover: </label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input
                    id="date"
                    type="date"
                    name="date"
                    value={this.state.date}
                    onChange={this.handleChange}
                    className="validate"
                  />
                  <span className="helper-text">Enter Earth Date</span>
                </div>
              </div>
              <button className="btn waves-effect waves-light" type="submit">
                Submit
                <i className="material-icons right">send</i>
              </button>
            </form>
          </div>
        </div>

        <div className="container">
          <div className="row">
            {marsRoverPhotos.map((photo, index) => {
              return (
                <img
                  className="responsive-img col s12 m6 l4"
                  key={index}
                  src={photo}
                  alt=""
                />
              );
            })}
          </div>
        </div>
      </>
    );
  }
}
