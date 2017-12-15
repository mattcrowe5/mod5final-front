import React from "react";
import { Route } from "react-router-dom";
import { headers } from "../../authorization/headers";
import LoginPage from "./LoginPage";

class AuthorizationPage extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  handleSpotifyCode = router => {
    if (localStorage.getItem("token")) {
      this.props.history.push("/main");
    } else {
      fetch("http://localhost:3000/api/v1/home", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          code: this.props.location.search.split("?code=")[1]
        })
      })
        .then(res => res.json())
        .then(data => {
          const { currentUser, code } = data;
          localStorage.setItem("token", code);
          this.setState({ currentUser: currentUser["display_name"] }, () =>
            this.props.history.push("/main")
          );
        });
      return null;
    }
    return null;
  };

  render() {
    return <div>{this.handleSpotifyCode()}</div>;
  }
}

export default AuthorizationPage;
