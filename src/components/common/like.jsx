import React from "react";

const Like = ({ liked, onClick, item }) => {
  let classes = "fa fa-heart";
  if (!liked) classes += "-o";
  return (
    <li
      className={classes}
      style={{ cursor: "pointer" }}
      onClick={onClick}
      aria-hidden="true"
    />
  );
};

export default Like;
