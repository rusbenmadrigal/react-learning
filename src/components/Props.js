import React from "react";

export default function Props(props) {
  return (
    <div>
      <h2>{props.bydefault}</h2>
    </div>
  );
}

Props.defaultProps = {
  bydefault: "The new props",
};
