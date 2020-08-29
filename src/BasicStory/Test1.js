import React from "react";

export const Test1 = (props) => (
  <div
    style={{
      height: "200px",
      width: "400px",
      textAlign: "center",
      backgroundColor: "green",
    }}
  >
    <h1>This is my Test1 Page Component</h1>
    <button onClick={props.showApp}>to the third</button>
    <button onClick={props.showApp2}>to the second</button>
  </div>
);
