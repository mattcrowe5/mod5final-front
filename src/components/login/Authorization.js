import React from "react";
import { Route } from "react-router-dom";
import * as actions from "../../actions/FetchUser";
import { connect } from "react-redux";
import Base from "../base/Base";

class AuthorizationPage extends React.Component {
  componentDidMount() {
    console.log(this.props.location.search);
    if (this.props.location.search.length !== 0) {
      const code = this.props.location.search.split("?code=")[1];
      this.props.loginUser(code, this.props.history);
      this.props.history.push("/home");
    } else {
      const token = localStorage.jwt;
      this.props.fetchUser(token, this.props.history);
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
