import React from "react";
import { storiesOf } from "@storybook/react";
import { App } from "../CodeAcademy/App";
import { AppEnthused } from "../CodeAcademy/Enthused/AppEnthused";

storiesOf("CodeAcademy", module)
  .add("topNumber", () => <App />)
  .add("enthused", () => <AppEnthused />);
