import React from "react";
import { Item, Button, Icon, Container } from "semantic-ui-react";
import AlreadySavedButton from "./alreadySaved";

const SavedConcertItem = props => {
  console.log("concert item props ", props);
  return (
    <Container>
      <br />
      <h3>Shows You Might Like</h3>
      <Item.Group divided>
        {props.shows.map(show => {
          return (
            <Item>
              <Item.Image size="small" src={show.photo} />
              <Item.Content>
                <Item.Header>{show.concert}</Item.Header>
                <Item.Meta>{show.artist}</Item.Meta>
                <Item.Description>
                  {show.date} <br /> {show.time} @ {show.venue}
                </Item.Description>
                <Item.Extra>
                  <Button
                    color="green"
                    floated="right"
                    as="a"
                    href={show.link}
                    target="_blank"
                  >
                    <Icon name="ticket" />
                    Buy tickets
                  </Button>
                  <AlreadySavedButton show={show} />
                </Item.Extra>
              </Item.Content>
              <br />
            </Item>
          );
        })}
      </Item.Group>
    </Container>
  );
};

export default SavedConcertItem;
