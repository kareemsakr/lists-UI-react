import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const DeleteButton = props => {
  return (
    <div className="delete-button" onClick={() => props.onDelete()}>
      <FontAwesomeIcon icon={faTimes} />
    </div>
  );
};

export default DeleteButton;
