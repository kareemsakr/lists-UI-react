import React, { Component } from "react";
import List from "./list";
import * as ListService from "../services/listService";
import * as AuthService from "../services/authService";

import { TraverseTree as tTree } from "../utilities/traverseTree";

class Lists extends Component {
  state = {
    list: {
      type: "list",
      subType: "main_list",
      text: "Main list",
      done: false,
      value: []
    }
  };

  handleDone = item => {
    const donness = !item.done;
    const { list: currentItem } = { ...this.state };

    //this.traverseTree(currentItem, item, donness);
    tTree(
      currentItem,
      item,
      item => {
        item.done = donness;
      },
      true
    );
    ListService.saveList(currentItem);
    this.setState({ list: currentItem });
  };
  handleDelete = async item => {
    const { list: currentItem } = { ...this.state };

    //this.traverseTreeDelete(currentItem, item);
    tTree(
      currentItem,
      item,
      x => {
        x.value.splice(x.value.findIndex(i => i._id === item._id), 1);
      },
      false,
      true
    );
    const newList = await ListService.saveList(currentItem);

    this.setState({ list: newList });
  };
  HandleAddList = async item => {
    const { list: currentItem } = { ...this.state };

    tTree(
      currentItem,
      item,
      x => {
        x.value.unshift({
          type: "list",
          text: null,
          done: false,
          value: []
        });
      },
      false,
      false
    );

    const newList = await ListService.saveList(currentItem);
    console.log(newList);
    this.setState({ list: newList });
  };
  handleAddItem = async item => {
    const { list: currentItem } = { ...this.state };
    //this.traverseTreeAddItem(currentItem, item);

    tTree(
      currentItem,
      item,
      x => {
        x.value.unshift({
          type: "item",
          text: null,
          done: false
        });
      },
      false,
      false
    );
    const newList = await ListService.saveList(currentItem);
    this.setState({ list: newList });
  };
  handleSave = async item => {
    const { list: currentItem } = { ...this.state };

    tTree(
      currentItem,
      item,
      x => {
        x.text = item.text;
      },
      false,
      false
    );
    const newList = await ListService.saveList(currentItem);
    this.setState({ list: newList });
  };

  // traverseTreeSaveItem(currentItem, item) {
  //   if (currentItem.id === item.id) {
  //     currentItem.text = item.text;
  //   } else {
  //     if (currentItem.type === "list") {
  //       currentItem.value.map(i => this.traverseTreeSaveItem(i, item));
  //     }
  //   }
  // }

  // isItemWithinCurrentList(list, item) {
  //   return list.value.map(i => i.id).includes(item.id);
  // }

  async componentDidMount() {
    const curUser = AuthService.getCurrentUser();
    const list = await ListService.getList(curUser._id);
    this.setState({
      list
    });
  }

  render() {
    return (
      <div className="main-list">
        <List
          list={this.state.list}
          onDone={this.handleDone}
          onDelete={this.handleDelete}
          onAddItem={this.handleAddItem}
          onAddList={this.HandleAddList}
          onSave={this.handleSave}
        />
      </div>
    );
  }
}

export default Lists;
