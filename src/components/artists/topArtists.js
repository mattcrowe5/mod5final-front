import React, { Component } from "react";
import { Card, Image, Container } from "semantic-ui-react";
import { connect } from "react-redux";

class TopArtists extends Component {
  render() {
    return (
      <Container>
        <Card.Group itemsPerRow={5}>
          {this.props.topArtists.map(artist => (
            <Card>
              <Image src={artist.images[0].url} />
              <Card.Content>
                <Card.Header>{artist.name}</Card.Header>
              </Card.Content>
            </Card>
          ))}
        </Card.Group>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  console.log("top tracks are ", state.topTracks);
  return {
    currentUser: state.currentUser,
    topArtists: state.topArtists
  };
}

export default connect(mapStateToProps)(TopArtists);
