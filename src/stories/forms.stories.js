import React from "react";
import { storiesOf } from "@storybook/react";
import FormEx from "../Forms/JsonSchema/components/FormEx";
import FormNet from "../Forms/JsonSchema/components/FormNet";
import Dynamic from "../Forms/JsonSchema/components/Dynamic";

storiesOf("Forms", module)
  .add("formBasic", () => <FormEx />)
  .add("formNet", () => <FormNet />)
  .add("dynamic", () => <Dynamic />);
