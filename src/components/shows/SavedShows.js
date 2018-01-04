import React from "react";
import * as actions from "../../actions/index";
import SavedConcertItem from "./savedConcertItem";
import { connect } from "react-redux";
import { Message, Container } from "semantic-ui-react";

class SavedShows extends React.Component {
  componentDidMount() {
    if (this.props.savedShows.length === 0) {
      this.props.fetchSavedShows(localStorage["jwt"]);
    }
  }

  render() {
    return (
      <div>
        {!!this.props.savedShows && this.props.savedShows.length > 0 ? (
          <SavedConcertItem shows={this.props.savedShows} />
        ) : (
          <Container>
            <Message color="blue">
              <Message.Header>No Saved Shows!</Message.Header>
              <p>
                "You don't have any upcoming shows saved. Go to the search for
                shows feature to find your next great concert!"
              </p>
            </Message>
          </Container>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    savedShows: state.savedShows
  };
}

export default connect(mapStateToProps, actions)(SavedShows);
