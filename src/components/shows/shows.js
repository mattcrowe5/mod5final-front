import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Input, Button, Dropdown, Container } from "semantic-ui-react";
import * as actions from "../../actions/index";

class Shows extends Component {
  constructor(props) {
    super(props);

    this.state = {
      artist_id: null
    };
  }

  handleSubmit = ev => {
    ev.preventDefault();
    console.log("in submit", this.state.artist_id, this.props);
    this.props.fetchRelatedArtists(this.state.artist_id);
  };

  handleChange = (ev, { value }) => {
    this.setState({ artist_id: value });
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
                onChange={this.handleChange}
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
