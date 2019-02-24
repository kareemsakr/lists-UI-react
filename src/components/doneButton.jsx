import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare, faCheckSquare } from "@fortawesome/free-solid-svg-icons";

const DoneButton = props => {
  return (
    <div className="done-button" onClick={() => props.onDone()}>
      <FontAwesomeIcon icon={props.item.done ? faCheckSquare : faSquare} />
    </div>
  );
};

export default DoneButton;
