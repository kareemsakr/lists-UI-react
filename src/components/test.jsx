import { ListGroup, ListGroupItem } from "reactstrap";
import React, { Component } from "react";

class Test extends Component {
  state = {};
  render() {
    return (
      <ListGroup defaultActiveKey="#link1">
        <ListGroupItem action href="#link1">
          Link 1
        </ListGroupItem>
        <ListGroupItem action href="#link2" disabled>
          Link 2
        </ListGroupItem>
        <ListGroupItem action>This one is a button</ListGroupItem>
      </ListGroup>
    );
  }
}

export default Test;
