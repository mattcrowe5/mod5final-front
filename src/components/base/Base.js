import React from "react";
import { headers } from "../../authorization/headers";
import { connect } from "react-redux";
import { Button, Form, Icon } from "semantic-ui-react";
import * as actions from "../../actions/index";
import { withRouter } from "react-router-dom";
import TopTracksList from "../tracks/topTracksList";

class Base extends React.Component {
  handleLogout = () => {
    this.props.logoutUser();
    this.props.history.push("/");
  };

  handleTopTracks = () => {
    this.props.history.push("/toptracks");
  };

  handleArtists = () => {
    this.props.history.push("/topartists");
  };

  handleShows = () => {
    this.props.history.push("/shows");
  };

  componentWillReceiveProps(nextProps) {
    if (localStorage.length !== 0 && nextProps.topTracks.length === 0) {
      this.props.fetchTracks();
      console.log("inside if statement");
    }
    console.log("next props", nextProps);
    if (localStorage.length !== 0 && nextProps.topArtists.length === 0) {
      this.props.fetchArtists();
      console.log("inside artists if statement");
    }
  }

  render() {
    return (
      <div>
        <p>Welcome, {this.props.currentUser.display_name}!</p>
        <Button color="green" onClick={this.handleLogout}>
          Log Out
        </Button>

        <Button animated color="green" onClick={this.handleTopTracks}>
          <Button.Content visible>Your Top Tracks</Button.Content>
          <Button.Content hidden>
            <Icon name="spotify" />
          </Button.Content>
        </Button>

        <Button animated color="green" onClick={this.handleArtists}>
          <Button.Content visible>Your Top Artists</Button.Content>
          <Button.Content hidden>
            <Icon name="spotify" />
          </Button.Content>
        </Button>

        <Button animated color="green" onClick={this.handleShows}>
          <Button.Content visible>Find Shows Near You!</Button.Content>
          <Button.Content hidden>
            <Icon name="sound" />
          </Button.Content>
        </Button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log("top tracks are ", state.topTracks);
  console.log("top artists are ", state.topArtists);

  return {
    currentUser: state.currentUser,
    topTracks: state.topTracks,
    topArtists: state.topArtists
  };
}

export default withRouter(connect(mapStateToProps, actions)(Base));
