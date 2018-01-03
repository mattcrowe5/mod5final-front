import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Input, Button, Dropdown, Container } from "semantic-ui-react";
import * as actions from "../../actions/index";
import ConcertItem from "./concertItem";
import Load from "./loader";
import NoShowMessage from "./noShowMessage";

const Loader = props => {
  console.log("loader props", props);
  if (props.loading === "done" && props.shows === null) {
    return <NoShowMessage />;
  } else {
    return <Load />;
  }
};

const cityOptions = [
  { key: 1, text: "New York", value: "New York" },
  { key: 2, text: "Los Angeles", value: "Los Angeles" },
  { key: 3, text: "Boston", value: "Boston" },
  { key: 4, text: "Philadelphia", value: "Philadelphia" },
  { key: 5, text: "San Diego", value: "San Diego" },
  { key: 6, text: "Austin", value: "Austin" },
  { key: 7, text: "Seattle", value: "Seattle" },
  { key: 8, text: "Washington DC", value: "Washington" }
];

class Shows extends Component {
  constructor(props) {
    super(props);

    this.state = {
      artist_id: null,
      city: null
    };
  }

  componentDidMount() {
    if (this.props.artists.length === 0) {
      this.props.fetchArtists();
    }
  }

  handleSubmit = (ev, dispatch) => {
    ev.preventDefault();
    console.log("in submit", this.state.artist_id, this.props);
    this.props.clearShows();
    this.props.loadAction();
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
          {this.props.loading === true || this.props.loading === "done" ? (
            <Loader
              shows={this.props.shows || null}
              loading={this.props.loading}
            />
          ) : null}
        </Container>
        {!!this.props.shows && this.props.shows.length > 0 ? (
          <div>
            <ConcertItem shows={this.props.shows} />
          </div>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("redux state is: ", state);
  let artists = state.topArtists.map(artist => {
    return { key: artist.id, text: artist.name, value: artist.id };
  });
  if (!!state.shows && state.shows.length > 0) {
    return {
      artists,
      currentUser: state.currentUser,
      shows: state.shows,
      relatedArtists: state.relatedArtists,
      loading: false
    };
  } else {
    return {
      artists,
      currentUser: state.currentUser,
      loading: state.loading,
      relatedArtists: state.relatedArtists,
      loading: state.loading
    };
  }
};

export default connect(mapStateToProps, actions)(Shows);
