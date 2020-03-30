import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./Views/Home/Home";
import CreateClient from "./Views/CreateClient/CreateClient";
import CreatePolicy from "./Views/CreatePolicy/CreatePolicy";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <br></br>
      <Switch>
        <Route path="/home" render={props => <Home {...props} />} />
        <Route
          path="/createClient"
          render={props => <CreateClient {...props} />}
        />
        <Route
          path="/createPolicy"
          render={props => <CreatePolicy {...props} />}
        />
        <Redirect to="/home" />
      </Switch>
    </div>
  );
}

export default App;
