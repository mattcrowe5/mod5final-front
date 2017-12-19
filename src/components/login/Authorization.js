import React from "react";
import { Route } from "react-router-dom";
import * as actions from "../../actions/index";
import { connect } from "react-redux";
import Base from "../base/Base";

class AuthorizationPage extends React.Component {
  componentDidMount() {
    if (this.props.location.search.length !== 0) {
      const code = this.props.location.search.split("?code=")[1];
      this.props.loginUser(code, this.props.history);
      this.props.history.push("/home");
    } else if (localStorage.length > 0) {
      const token = localStorage.jwt;
      this.props.fetchUser(token, this.props.history);
    } else {
      this.props.history.push("/");
    }
  }

  render() {
    return (
      <div>
        <Base />
      </div>
    );
  }
}

export default connect(() => ({}), actions)(AuthorizationPage);
