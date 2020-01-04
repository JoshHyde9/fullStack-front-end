import React from "react";
import { Route, Switch } from "react-router-dom";

// Styles
import "materialize-css/dist/css/materialize.min.css";
import "./scss/style.css";

// Components
import NavBar from "./components/NavBar";

// Pages
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Home} />
      </Switch>
    </>
  );
}

export default App;
