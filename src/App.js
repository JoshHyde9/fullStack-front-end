import React from "react";
import { Route, Switch } from "react-router-dom";

// Styles
import "materialize-css/dist/css/materialize.min.css";

// Components
import NavBar from "./components/NavBar";

// Pages
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </>
  );
}

export default App;
