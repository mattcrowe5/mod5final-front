import React from "react";
import { connect } from "react-redux";
import { Button, Icon, Segment } from "semantic-ui-react";
import * as actions from "../../actions/index";
import { withRouter } from "react-router-dom";
import MainMenu from "../style/menu";

class Base extends React.Component {
  handleTopTracks = () => {
    this.props.history.push("/toptracks");
  };

  handleArtists = () => {
    this.props.history.push("/topartists");
  };

  handleShows = () => {
    this.props.history.push("/shows");
  };

  handleSavedShows = () => {
    this.props.history.push("/saved");
  };

  // componentWillReceiveProps(nextProps) {
  //   if (localStorage.length !== 0 && nextProps.topTracks.length === 0) {
  //     this.props.fetchTracks();
  //     console.log("inside if statement");
  //   }
  //   console.log("next props", nextProps);
  //   if (localStorage.length !== 0 && nextProps.topArtists.length === 0) {
  //     this.props.fetchArtists();
  //     console.log("inside artists if statement");
  //   }
  // }

  render() {
    return (
      <div>
        <MainMenu user={this.props.currentUser.display_name} />
        <Segment
          textAlign="center"
          vertical
          style={{
            marginTop: "0px",
            minHeight: 1200,
            backgroundImage:
              "url(https://images3.alphacoders.com/151/thumb-1920-151409.jpg)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
          }}
        >
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

          <Button animated color="green" onClick={this.handleSavedShows}>
            <Button.Content visible>Your Shows</Button.Content>
            <Button.Content hidden>
              <Icon name="hand peace" />
            </Button.Content>
          </Button>
        </Segment>
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
