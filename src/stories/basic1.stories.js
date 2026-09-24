import React from "react";
import { action } from "storybook/actions";
import { linkTo } from "@storybook/addon-links";
import { Test1 } from "../BasicStory/Test1";

const meta = {
  title: "Diverse/Basic/Basic1",
};
export default meta;

export const ToThird = {
  name: "to third",
  render: () => (
    <Test1 showApp={linkTo("Diverse/Basic/Basic")} onClick={action("clicked2")}>
      xxxxxxx
    </Test1>
  ),
};
