import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./components/login/LoginPage";
import AuthorizationPage from "./components/login/Authorization";
// import Base from "./components/base/Base";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/home" component={AuthorizationPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
