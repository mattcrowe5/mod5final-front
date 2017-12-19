import React, { Component } from "react";
import { Card, Image } from "semantic-ui-react";

class TopTracksList extends Component {
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

export default TopTracksList;
