import React from "react";
import App from "../Diverse/Knp/Components/App";

const shouldShowHearth = true;

const meta = {
  title: "Diverse/Knp",
};
export default meta;

export const WeightLifting = {
  name: "Weight Lifting",
  render: () => <App withHearth={shouldShowHearth} />,
};
