import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Input, Button, Dropdown, Container } from "semantic-ui-react";
import * as actions from "../../actions/index";

const cityOptions = [
  { key: 1, text: "New York", value: "New York" },
  { key: 2, text: "Los Angeles", value: "Los Angeles" },
  { key: 3, text: "Boston", value: "Boston" },
  { key: 4, text: "Philadelphia", value: "Philadelphia" },
  { key: 5, text: "San Diego", value: "San Diego" },
  { key: 6, text: "Austin", value: "Austin" }
];

class Shows extends Component {
  constructor(props) {
    super(props);

    this.state = {
      artist_id: null,
      city: null
    };
  }

  handleSubmit = ev => {
    ev.preventDefault();
    console.log("in submit", this.state.artist_id, this.props);
    this.props.fetchRelatedArtists(this.state);
  };

  handleArtistChange = (ev, { value }) => {
    this.setState({ artist_id: value });
  };

  handleCityChange = (ev, { value }) => {
    this.setState({ city: value });
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <Container textAlign="center">
          <Form onSubmit={this.handleSubmit}>
            <Form.Field>
              <label>Choose a Top Artist</label>
              <Dropdown
                placeholder="Select Artist"
                fluid
                search
                selection
                options={this.props.artists}
                value={this.state.artist_id}
                onChange={this.handleArtistChange}
              />
            </Form.Field>
            <Form.Field>
              <label>Choose a City</label>
              <Dropdown
                placeholder="Select City"
                fluid
                search
                selection
                options={cityOptions}
                value={this.state.city}
                onChange={this.handleCityChange}
              />
            </Form.Field>
            <Button type="submit">Submit</Button>
          </Form>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => {
  let artists = state.topArtists.map(artist => {
    return { key: artist.id, text: artist.name, value: artist.id };
  });
  return { artists, currentUser: state.currentUser };
};

export default connect(mapStateToProps, actions)(Shows);
