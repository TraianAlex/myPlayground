import React from "react";
import { DemoButton } from "./storybookDemo";

const meta = {
  title: "Diverse/Basic/Button3",
};
export default meta;

export const WithText3 = {
  name: "withText3",
  render: () => <DemoButton>Hello Button3</DemoButton>,
};

export const WithEmoji3 = {
  name: "withEmoji3",
  render: () => (
    <DemoButton>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </DemoButton>
  ),
};
