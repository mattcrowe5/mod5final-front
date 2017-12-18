import React from "react";
import { Button, Icon } from "semantic-ui-react";

class LoginPage extends React.Component {
  render() {
    return (
      <div>
        <Button
          animated
          basic
          color="green"
          href="http://localhost:3000/api/v1/sessions"
        >
          <Button.Content visible>Log In to Spotify</Button.Content>
          <Button.Content hidden>
            <Icon name="music" />
          </Button.Content>
        </Button>
      </div>
    );
  }
}

export default LoginPage;
