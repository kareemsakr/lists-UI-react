export function TraverseTree(
  treeNode,
  target,
  func,
  keepTraversing,
  callOnParent
) {
  // console.log(
  //   "tTrea called, we are at " +
  //     treeNode._id +
  //     " and we are looking for" +
  //     target._id
  // );

  //if (check if self is target)
  if (treeNode._id === target._id) {
    console.log("if (check if self is target), we found it");
    //console.log(treeNode);
    func(treeNode);
    //console.log(treeNode);

    //if keepgoing? and treeNode is list?
    //call on all children
    if (keepTraversing && treeNode.type === "list") {
      console.log("if keepgoing? and treeNode is list?");
      treeNode.value.map(i =>
        TraverseTree(i, i, func, keepTraversing, callOnParent)
      );
    }
  }
  //else
  //then check all direct decendants of self
  else {
    console.log("else (means it was not found)");
    if (treeNode.type === "list" && isItemWithinCurrentList(treeNode, target)) {
      //if found call func
      console.log("found withing current list ");
      console.log(treeNode.value[treeNode.value.indexOf(target)]);
      if (callOnParent) {
        console.log("calling on parent");
        func(treeNode);
      } else {
        TraverseTree(
          treeNode.value[treeNode.value.findIndex(x => x._id === target._id)],
          target,
          func,
          keepTraversing
        );
      }
    }
    //else call Traverse tree on all list children
    else {
      console.log("else call Traverse tree on all list children");
      treeNode.value
        .filter(x => x.type === "list")
        .map(i => TraverseTree(i, target, func, keepTraversing, callOnParent));
    }
  }
}

function isItemWithinCurrentList(list, item) {
  return list.value.map(i => i._id).includes(item._id);
}
