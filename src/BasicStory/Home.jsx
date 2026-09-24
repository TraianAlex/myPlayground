import React from "react";

export const Home = ({
  label = "This is my Home Page Component Hello Storybook",
  age = 35,
  disabled = false,
}) => (
  <div
    style={{
      height: "200px",
      width: "400px",
      textAlign: "center",
      backgroundColor: "yellow",
    }}
  >
    <h1 onClick={() => console.log("Data:", 1, 3, 4)} disabled={disabled}>
      {label}
      {age}
    </h1>
  </div>
);
