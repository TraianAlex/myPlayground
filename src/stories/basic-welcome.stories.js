import React from "react";
import { linkTo } from "@storybook/addon-links";
import { Welcome } from "./storybookDemo";

const meta = {
  title: "Diverse/Basic/Welcome",
};
export default meta;

export const ToStorybook = {
  name: "to Storybook",
  render: () => <Welcome showApp={linkTo("Diverse/Basic/Button")} />,
};
