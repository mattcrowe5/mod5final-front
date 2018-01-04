import React, { Component } from "react";
import { Label } from "semantic-ui-react";

import { connect } from "react-redux";
import { saveShow, removeShow } from "../../actions/index";

class SaveShowButton extends Component {
  state = { saved: false };

  handleSaveClick = () => {
    saveShow(this.props.show, localStorage["jwt"]);
    this.setState({ saved: !this.state.saved });
  };

  handleRemoveClick = () => {
    removeShow(this.props.show, localStorage["jwt"]);
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

export default SaveShowButton;
