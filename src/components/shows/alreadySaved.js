import React, { Component } from "react";
import { Label } from "semantic-ui-react";

import { connect } from "react-redux";
import * as actions from "../../actions/index";

class AlreadySavedButton extends Component {
  state = { saved: true };

  handleSaveClick = () => {
    this.props.saveShow(this.props.show, localStorage["jwt"]);
    this.setState({ saved: !this.state.saved });
  };

  handleRemoveClick = () => {
    this.props.removeShow(this.props.show, localStorage["jwt"]);
    this.setState({ saved: !this.state.saved });
  };

  render() {
    return this.state.saved === false ? (
      <Label
        icon="bookmark"
        content="Save Show"
        color="green"
        onClick={this.handleSaveClick}
      />
    ) : (
      <Label
        icon="remove bookmark"
        content="Remove From Saved Shows"
        color="black"
        onClick={this.handleRemoveClick}
      />
    );
  }
}

export default connect(null, actions)(AlreadySavedButton);
