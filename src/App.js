import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import LoginPage from "./components/login/LoginPage";
import Authorization from "./components/login/Authorization";
import Main from "./components/main/Main";

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={LoginPage} />
        <Route path="/home" component={Authorization} />
        <Route path="/main" component={Main} />
      </div>
    );
  }
}

export default App;
