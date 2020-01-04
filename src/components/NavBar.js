import React, { Component } from "react";
import { Link } from "react-router-dom";

// Styles
import M from "materialize-css";

// Img
import Logo from "../img/NASA-logo.svg";

export default class NavBar extends Component {
  componentDidMount() {
    M.AutoInit();
  }

  render() {
    return (
      <>
        <nav>
          <div className="nav-wrapper grey darken-4">
            <Link to="#" data-target="mobile-nav" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </Link>
            <Link to="/" className="brand-logo">
              <img src={Logo} alt="NASA logo" />
            </Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </ul>
          </div>
        </nav>

        <ul className="sidenav" id="mobile-nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </>
    );
  }
}
