import React, { Component } from "react";
import { Link } from "react-router-dom";

// Styles
import M from "materialize-css";

export default class NavBar extends Component {
  componentDidMount() {
    M.AutoInit();
  }

  render() {
    return (
      <>
        <nav>
          <div className="nav-wrapper grey darken-4">
            <Link href="#" data-target="mobile-nav" class="sidenav-trigger">
              <i class="material-icons">menu</i>
            </Link>
            <Link to="/" className="brand-logo">
              Logo
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

        <ul class="sidenav" id="mobile-nav">
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
