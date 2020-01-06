import React, { Component } from "react";

const API_URL = `https://enigmatic-fjord-24728.herokuapp.com/api/v1/nasa/insight`;

export default class Insight extends Component {
  async componentDidMount() {
    await fetch(API_URL)
      .then(result => result.json())
      .then(data => {
        return console.log(data);
      });
  }

  render() {
    return <div></div>;
  }
}
