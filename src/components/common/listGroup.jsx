import React from "react";

const ListGroup = props => {
  return (
    //ul.list-group>li.list-group-item
    <ul className="list-group col">
      {props.items.map(element => (
        <li
          className={
            "list-group-item" +
            (element[props.valueProperty] === props.selectedItem
              ? " active"
              : "")
          }
          onClick={() =>
            props.onSelectedItemChanged(element[props.valueProperty])
          }
          key={element[props.valueProperty]}
        >
          {element[props.textProperty]}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id"
};

export default ListGroup;
