import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as FaIcons from "@fortawesome/free-solid-svg-icons";

class AddButton extends Component {
  state = { expanded: false };
  render() {
    const { expanded } = this.state;
    const { onAddItem, onAddList, onClick } = this.props;
    return (
      <React.Fragment>
        <div
          className={"add-button" + (expanded ? " expand" : "")}
          onClick={() => {
            this.setState({ expanded: !this.state.expanded });
            onClick();
          }}
        >
          <FontAwesomeIcon icon={FaIcons.faPlus} />
        </div>
        <div
          onClick={() => onClick()}
          className={"add-button-content" + (expanded ? " expand" : "")}
        >
          <FontAwesomeIcon icon={FaIcons.faMinus} onClick={() => onAddItem()} />
          <FontAwesomeIcon icon={FaIcons.faList} onClick={() => onAddList()} />
        </div>
      </React.Fragment>
    );
  }
}

export default AddButton;
