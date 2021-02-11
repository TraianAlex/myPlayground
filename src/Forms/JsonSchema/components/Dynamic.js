import React, { Component } from "react";
import Form from "react-jsonschema-form";

const schema = {
  title: "Person",
  type: "object",
  properties: {
    "Do you have any pets?": {
      type: "string",
      enum: [
        "No",
        "Yes: One",
        "Yes: More than one"
      ],
      default: "No"
    }
  },
  required: [
    "Do you have any pets?"
  ],
  dependencies: {
    "Do you have any pets?": {
      oneOf: [
        {
          properties: {
            "Do you have any pets?": {
              enum: [
                "No"
              ]
            }
          }
        },
        {
          properties: {
            "Do you have any pets?": {
              enum: [
                "Yes: One"
              ]
            },
            "How old is your pet?": {
              type: "number"
            }
          },
          required: [
            "How old is your pet?"
          ]
        },
        {
          properties: {
            "Do you have any pets?": {
              enum: [
                "Yes: More than one"
              ]
            },
            "Do you want to get rid of any?": {
              type: "boolean"
            }
          },
          required: [
            "Do you want to get rid of any?"
          ]
        }
      ]
    }
  }
};

export default class Dynamic extends Component {
  render() {
    return (
      <div className="container">
        <Form
          schema={schema}
          //uiSchema={uiSchema}
          // formData={formData}
        //onChange={log("changed")}
        //onSubmit={this.onSubmit}
        //onError={this.onError}
        />
      </div>
    );
  }
}
