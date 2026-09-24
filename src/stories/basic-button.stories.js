import React from "react";
import { action } from "storybook/actions";
import { DemoButton } from "./storybookDemo";

const meta = {
  title: "Diverse/Basic/Button",
};
export default meta;

export const WithText = {
  name: "with text",
  render: () => (
    <DemoButton onClick={action("clicked")}>Hello Button</DemoButton>
  ),
};

export const WithEmoji = {
  name: "with some emoji",
  render: () => (
    <DemoButton onClick={action("clicked")}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯xx
      </span>
    </DemoButton>
  ),
};
