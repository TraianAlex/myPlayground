import React from "react";
import FormEx from "../Forms/JsonSchema/components/FormEx";
import FormNet from "../Forms/JsonSchema/components/FormNet";
import Dynamic from "../Forms/JsonSchema/components/Dynamic";

const meta = {
  title: "Forms",
};
export default meta;

export const FormBasic = {
  name: "formBasic",
  render: () => <FormEx />,
};

export const FormNetStory = {
  name: "formNet",
  render: () => <FormNet />,
};

export const DynamicStory = {
  name: "dynamic",
  render: () => <Dynamic />,
};
