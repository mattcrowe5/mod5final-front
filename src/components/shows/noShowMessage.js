import React from "react";
import { Message, Container } from "semantic-ui-react";

const NoShowMessage = () => (
  <Container textAlign="center">
    <br />
    <Message
      negative
      header="No Upcoming Shows"
      content="There are no upcoming shows in this city by artists related to your selection.  Try a different city or artist!"
    />
  </Container>
);

export default NoShowMessage;
