import React, { Component } from 'react'
import Form from "react-jsonschema-form";

const schema = {
  title: "Todo",
  type: "object",
  required: ["title"],
  properties: {
    title: { type: "string", title: "Title", default: "A new task" },
    done: { type: "boolean", title: "Done?", default: false },
    yes: { type: "boolean", title: "Correct?", default: false },
    select: { type: "number",
      enum: [1, 2, 3],
      enumNames: ["one", "two", "three"]
    }
  }
};

const uiSchema = {
  title: { "ui:widget": "textarea" },
  done: { "ui:widget": "checkbox" },
  yes: { "ui:widget": "radio" },
  select: { "ui:widget": "select" }
}

const log = (type) => console.log.bind(console, type);

const formData = {
  title: "First task",
  done: true
};

export default class FormEx extends Component {

  onSubmit = ({ formData }) => console.log("Data submitted: ", formData);
  onError = (errors) => console.log("I have", errors.length, "errors to fix");

  render() {
    return (
      <div className="container">
        <Form
          schema={schema}
          uiSchema={uiSchema}
          formData={formData}
          onChange={log("changed")}
          onSubmit={this.onSubmit}
          onError={this.onError} />
      </div>
    )
  }
}
