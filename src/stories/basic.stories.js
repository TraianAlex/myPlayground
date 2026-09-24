import React from "react";
import { action } from "storybook/actions";
import { linkTo } from "@storybook/addon-links";
import { DemoButton, Welcome } from "./storybookDemo";
import { Test1 } from "../BasicStory/Test1";
import { Home } from "../BasicStory/Home";

const meta = {
  title: "Diverse/Basic/Basic",
};
export default meta;

export const ToStorybook = {
  name: "to Storybook",
  render: () => <Welcome showApp={linkTo("Diverse/Basic/Basic1")} />,
};

export const ToFirst = {
  name: "to first",
  render: () => (
    <Test1
      showApp={linkTo("Diverse/Basic/Basic1")}
      showApp2={linkTo("Diverse/Basic/Basic")}
      onClick={action("clicked")}
    >
      xxxxxxx
    </Test1>
  ),
};

export const ToSecond = {
  name: "to second",
  render: () => (
    <DemoButton onClick={linkTo("Diverse/Basic/Basic")}>xxxxxxx</DemoButton>
  ),
};

export const HomeStory = {
  name: "Home",
  render: () => <Home />,
};

export const WithLog = {
  name: "with Log",
  render: () => (
    <DemoButton onClick={() => console.log("Data:", 1, 3, 4)}>
      Log Button
    </DemoButton>
  ),
};

export const WithWarning = {
  name: "with Warning",
  render: () => (
    <DemoButton onClick={() => console.warn("Data:", 1, 3, 4)}>
      Warn Button
    </DemoButton>
  ),
};

export const WithError = {
  name: "with Error",
  render: () => (
    <DemoButton onClick={() => console.error("Test Error")}>
      Error Button
    </DemoButton>
  ),
};

export const WithUncaughtError = {
  name: "with Uncatched Error",
  render: () => (
    <DemoButton onClick={() => console.log("Data:", "T.buu.foo")}>
      Throw Button
    </DemoButton>
  ),
};
