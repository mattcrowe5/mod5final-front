import React from "react";
import { headers } from "../../authorization/headers";
import { connect } from "react-redux";
import { Button } from "semantic-ui-react";
import { store } from "../../index.js";
import * as actions from "../../actions/FetchUser";
import { withRouter } from "react-router-dom";

class Base extends React.Component {
  handleLogout = () => {
    this.props.logoutUser();
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <p>{this.props.currentUser.display_name}</p>
        <Button onClick={this.handleLogout}>Log Out</Button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { currentUser: state.currentUser };
}

export default withRouter(connect(mapStateToProps, actions)(Base));
