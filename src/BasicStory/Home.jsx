import React from "react";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

export default {
  title: "Storybook Knobs",
  decorators: [withKnobs],
};

const age = number("Age", 35);

export const Home = () => (
  <div
    style={{
      height: "200px",
      width: "400px",
      textAlign: "center",
      backgroundColor: "yellow",
    }}
  >
    <h1
      onClick={() => console.log("Data:", 1, 3, 4)}
      disabled={boolean("Disabled", false)}
    >
      {text("Label", "This is my Home Page Component Hello Storybook")}
      {age}
    </h1>
  </div>
);
