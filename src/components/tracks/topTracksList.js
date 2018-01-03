import React, { Component } from "react";
import { Card, Image } from "semantic-ui-react";
import { connect } from "react-redux";
import * as actions from "../../actions/index";

class TopTracksList extends Component {
  componentDidMount() {
    if (this.props.toptracks.length === 0) {
      this.props.fetchTracks();
    }
  }

  render() {
    return (
      <Card.Group itemsPerRow={6}>
        {this.props.toptracks.map(track => (
          <Card>
            <Image src={track.album.images[0].url} />
            <Card.Content>
              <Card.Header>{track.name}</Card.Header>
              <Card.Meta>
                <span>{track.artists[0].name}</span>
              </Card.Meta>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    );
  }
}

function mapStateToProps(state) {
  console.log("top tracks are ", state.topTracks);
  return {
    currentUser: state.currentUser,
    toptracks: state.topTracks
  };
}

export default connect(mapStateToProps, actions)(TopTracksList);
