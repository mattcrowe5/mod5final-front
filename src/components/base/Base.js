import React from "react";
import { headers } from "../../authorization/headers";
import { connect } from "react-redux";
import { Button } from "semantic-ui-react";
import * as actions from "../../actions/index";
import { withRouter } from "react-router-dom";

class Base extends React.Component {
  handleLogout = () => {
    this.props.logoutUser();
    this.props.history.push("/");
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.topTracks.length === 0) {
      this.props.fetchTracks();
      console.log("inside if statement");
    }
    console.log("next props", nextProps);
  }

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
  console.log("top tracks are ", state.topTracks);
  return {
    currentUser: state.currentUser,
    topTracks: state.topTracks
  };
}

export default withRouter(connect(mapStateToProps, actions)(Base));
