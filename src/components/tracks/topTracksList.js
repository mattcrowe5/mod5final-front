import _ from "lodash";
import React, { Component } from "react";
import { Button, Image, List, Transition } from "semantic-ui-react";

export default class TopTracksList extends Component {
  state = { tracks: this.props.toptracks.slice(0, 3) };

  handleAdd = () =>
    this.setState({
      tracks: this.props.toptracks.slice(0, this.state.tracks.length + 1)
    });

  handleRemove = () =>
    this.setState({ tracks: this.state.tracks.slice(0, -1) });

  render() {
    const { tracks } = this.state;
    const division = " - ";

    return (
      <div>
        <Button.Group>
          <Button
            disabled={tracks.length === 0}
            icon="minus"
            onClick={this.handleRemove}
          />
          <Button
            disabled={tracks.length === this.props.toptracks.length}
            icon="plus"
            onClick={this.handleAdd}
          />
        </Button.Group>

        <Transition.Group
          as={List}
          duration={200}
          divided
          size="huge"
          verticalAlign="middle"
        >
          {tracks.map(track => (
            <List.Item key={track.name}>
              <Image avatar src={track.album.images[1].url} />
              <List.Content
                header={_.startCase(
                  `${track.name} ${division} ${track.artists[0].name}`
                )}
              />
            </List.Item>
          ))}
        </Transition.Group>
      </div>
    );
  }
}
