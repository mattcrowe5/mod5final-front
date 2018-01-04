import React from "react";
import { Button, Icon, Container, Header, Segment } from "semantic-ui-react";

class LoginPage extends React.Component {
  render() {
    return (
      <div>
        <Segment
          textAlign="center"
          vertical
          style={{
            minHeight: 1200,
            backgroundImage:
              "url(https://images3.alphacoders.com/151/thumb-1920-151409.jpg)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
          }}
        >
          <Container text style={{ marginTop: "25%" }}>
            <Header
              inverted
              as="h1"
              textAlign="center"
              style={{
                marginTop: "px"
              }}
            >
              {" "}
              <Header.Content> Welcome to ShowSpotter</Header.Content>
            </Header>
          </Container>
          <Container>
            <Button
              animated
              color="green"
              href="http://localhost:3000/api/v1/sessions"
            >
              <Button.Content visible>Log In</Button.Content>
              <Button.Content hidden>
                <Icon name="music" />
              </Button.Content>
            </Button>
          </Container>
        </Segment>
      </div>
    );
  }
}

export default LoginPage;
