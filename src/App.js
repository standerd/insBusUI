import React, {useEffect, useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./Views/Home/Home";
import CreateClient from "./Views/CreateClient/CreateClient";
import CreatePolicy from "./Views/CreatePolicy/CreatePolicy";
import EmployeeLogin from "./Views/Login/EmployeeLogin"
import EmployeeValidate from "./Views/Login/EmployeeValidate"

function App() {

  const [auth, setAuth] = useState(false);

  useEffect(()=> {
    const isAuth = localStorage.getItem("token");
    if(!isAuth){
      setAuth(false);
    } 
    else {
      setAuth(true);
    }
  }, [auth]);

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
         <Route
          path="/login"
          render={props => <EmployeeLogin {...props} />}
        />
         <Route
          path="/validate"
          render={props => <EmployeeValidate {...props} />}
        />
        <Redirect to="/home" />
      </Switch>
    </div>
  );
}

export default App;
