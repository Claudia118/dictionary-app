import React from "react";

import "./Example.css"

export default function Examples(props) {
  if (props.example) {
    return (
      <div className="Example">
        {props.example}
      </div>
    );
  } else {
    return null;
  }
}
