import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, withRouter } from "react-router-dom";
import App from "./App";
import "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { Provider } from "react-redux";
import configureStore from "./configureStore";

const TheApp = withRouter(App);
const store = configureStore();

const MyApp = () => (
  <Router>
    <TheApp />
  </Router>
);

ReactDOM.render(
  <Provider store={store}>
    <MyApp />
  </Provider>,
  document.getElementById("root")
);
