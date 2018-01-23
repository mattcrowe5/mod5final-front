import React from "react";
import { connect } from "react-redux";
import { Button, Icon, Segment, Modal, Container } from "semantic-ui-react";
import * as actions from "../../actions/index";
import { withRouter } from "react-router-dom";
import MainMenu from "../style/menu";
import TopTrackList from "../tracks/topTracksList";
import TopArtists from "../artists/topArtists";
import SavedShows from "../shows/SavedShows";

class Base extends React.Component {
  handleShows = () => {
    this.props.history.push("/shows");
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
        <MainMenu />
        <Segment
          textAlign="center"
          vertical
          style={{
            marginTop: "0px",
            minHeight: 1000,
            backgroundImage:
              "url(https://images3.alphacoders.com/151/thumb-1920-151409.jpg)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
          }}
        >
          <Container style={{ marginTop: "25%" }}>
            <Modal
              scrolling
              trigger={
                <Button animated color="green">
                  <Button.Content visible>Your Top Tracks</Button.Content>
                  <Button.Content hidden>
                    <Icon name="spotify" />
                  </Button.Content>
                </Button>
              }
            >
              <Modal.Header> Your Top Songs</Modal.Header>
              <Modal.Content>
                <TopTrackList />
              </Modal.Content>
            </Modal>

            <Modal
              scrolling
              trigger={
                <Button animated color="green">
                  <Button.Content visible>Your Top Artists</Button.Content>
                  <Button.Content hidden>
                    <Icon name="spotify" />
                  </Button.Content>
                </Button>
              }
            >
              <Modal.Header> Your Top Artists</Modal.Header>
              <Modal.Content>
                <TopArtists />
              </Modal.Content>
            </Modal>

            <Button animated color="green" onClick={this.handleShows}>
              <Button.Content visible>Find Shows Near You!</Button.Content>
              <Button.Content hidden>
                <Icon name="sound" />
              </Button.Content>
            </Button>

            <Modal
              scrolling
              trigger={
                <Button animated color="green">
                  <Button.Content visible>Your Shows</Button.Content>
                  <Button.Content hidden>
                    <Icon name="hand peace" />
                  </Button.Content>
                </Button>
              }
            >
              <Modal.Header> Your Shows</Modal.Header>
              <Modal.Content>
                <SavedShows />
              </Modal.Content>
            </Modal>
          </Container>
        </Segment>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    topTracks: state.topTracks,
    topArtists: state.topArtists
  };
}

export default withRouter(connect(mapStateToProps, actions)(Base));
