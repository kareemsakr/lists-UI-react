import React from "react";

//props : {liked, handleClick}
const LikeButton = props => {
  return (
    <span
      className={"fa fa-heart" + (props.liked ? "" : "-o")}
      onClick={props.onLike}
      style={{ cursor: "pointer" }}
    />
  );
};

export default LikeButton;
