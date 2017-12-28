import React from "react";
import { Image, Item } from "semantic-ui-react";

const ConcertItem = props => {
  console.log("concert item props ", props);
  return (
    <Item.Group>
      {props.shows.map(show => {
        return (
          <div>
            <Item key={show.concert}>
              <Item.Image size="small" src={show.photo} />
              <Item.Content>
                <Item.Header>{show.concert}</Item.Header>
                <Item.Meta>{show.artist}</Item.Meta>
                <Item.Description>
                  {show.date} <br /> {show.time}
                </Item.Description>
                <Item.Extra as="a" href={show.link} target="_blank">
                  Link to Show
                </Item.Extra>
              </Item.Content>
            </Item>
            <br />
          </div>
        );
      })}
    </Item.Group>
  );
};

export default ConcertItem;
