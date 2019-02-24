import React, { Component } from "react";

import DoneButton from "./doneButton";
import DeleteButton from "./deleteButton";

class Item extends Component {
  state = {};
  componentDidMount() {
    if (this.nameInput) {
      this.nameInput.focus();
      this.nameInput.setSelectionRange(0, this.nameInput.value.length);
    }
  }
  save(e) {
    if (e.key === "Enter") {
      this.nameInput.blur();
    }
  }
  render() {
    const { onDone, onDelete, onSave, item } = this.props;

    return (
      <div className={"list-item" + (item.done ? " done" : "")}>
        {item.text ? (
          item.text
        ) : (
          <input
            onBlur={e => onSave({ ...item, text: e.target.value })}
            onKeyUp={e => this.save(e)}
            ref={input => {
              this.nameInput = input;
            }}
            defaultValue="New Item"
          />
        )}
        <DeleteButton onDelete={() => onDelete(item)} />
        <DoneButton onDone={() => onDone(item)} item={item} />
      </div>
    );
  }
}

export default Item;
