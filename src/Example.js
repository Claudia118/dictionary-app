import React from "react";

export default function Examples(props) {
  if (props.example) {
    return (
      <div className="Examples">
        <strong>Example:</strong> <em>{props.example}</em>
      </div>
    );
  } else {
    return null;
  }
}
