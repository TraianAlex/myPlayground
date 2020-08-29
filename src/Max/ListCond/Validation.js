import React from "react";

export default function Validation(props) {
  return (
    <div>
      {props.textLength < 5 ? <p>Not enougth text</p> : <p>Enougth text</p>}
    </div>
  );
}
