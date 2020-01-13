import React from "react";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className="center-align container">
      <h1 className="header">Page not found.</h1>

      <Link to="/" className="waves-effect waves-light btn-large">
        Return Home
      </Link>
    </div>
  );
}
