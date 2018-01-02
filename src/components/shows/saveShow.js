import React, { Component } from "react";
import { Button, Label } from "semantic-ui-react";

class SaveShowButton extends Component {
  state = { saved: false };

  handleClick = () => this.setState({ saved: !this.state.saved });

  render() {
    return this.state.saved === false ? (
      <Label
        icon="bookmark"
        content="Save Show"
        color="green"
        onClick={this.handleClick}
      />
    ) : (
      <Label
        icon="remove bookmark"
        content="Remove From Saved Shows"
        color="black"
        onClick={this.handleClick}
      />
    );
  }
}

export default SaveShowButton;
