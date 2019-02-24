import React, { Component } from "react";

import Item from "./item";

import DoneButton from "./doneButton";
import AddButton from "./addButton";
import DeleteButton from "./deleteButton";

class List extends Component {
  state = { on: false };
  toggle = () => {
    this.setState({ on: !this.state.on });
  };
  save(e) {
    if (e.key === "Enter") {
      this.nameInput.blur();
    }
  }
  componentDidMount() {
    if (this.props.list.subType === "main_list") {
      setTimeout(() => {
        this.setState({ on: true });
      }, 500);
    }

    if (this.nameInput) {
      this.nameInput.focus();
      this.nameInput.setSelectionRange(0, this.nameInput.value.length);
    }
  }

  render() {
    const { on } = this.state;
    const { done } = this.props.list;
    const { onDone, onDelete, onAddItem, onAddList, list, onSave } = this.props;

    return (
      <div className={this.props.className}>
        <div className={"list-header" + (done ? " done" : "")}>
          {list.text ? (
            <div
              className={"list-header-text" + (on ? " expand" : "")}
              onClick={() => {
                this.toggle();
              }}
            >
              {list.text}
            </div>
          ) : (
            <div
              className={"list-header-text" + (on ? " expand" : "")}
              onClick={() => {
                this.toggle();
              }}
            >
              <input
                onBlur={e => onSave({ ...list, text: e.target.value })}
                onKeyUp={e => this.save(e)}
                ref={input => {
                  this.nameInput = input;
                }}
                defaultValue="New Item"
              />
            </div>
          )}

          <DeleteButton onDelete={() => onDelete(this.props.list)} />

          <DoneButton
            onDone={() => onDone(this.props.list)}
            item={this.props.list}
          />
          <AddButton
            onAddItem={() => onAddItem(this.props.list)}
            onAddList={() => onAddList(this.props.list)}
            onClick={() => {
              this.setState({ on: true });
            }}
          />
        </div>
        {/* {on && ()} raplaced with display none */}
        <div id="" className={"list-content clearfix" + (on ? " expand" : "")}>
          {this.props.list.value.map(item =>
            item.type === "item" ? (
              <Item
                item={item}
                onDone={this.props.onDone}
                onDelete={this.props.onDelete}
                onSave={this.props.onSave}
                key={
                  item._id ||
                  Math.random()
                    .toString(36)
                    .substring(7)
                }
              />
            ) : (
              <List
                key={
                  item._id ||
                  Math.random()
                    .toString(36)
                    .substring(7)
                }
                list={item}
                onDone={this.props.onDone}
                onDelete={this.props.onDelete}
                onAddItem={this.props.onAddItem}
                onAddList={this.props.onAddList}
                onSave={this.props.onSave}
              />
            )
          )}
        </div>
      </div>
    );
  }
}

export default List;
