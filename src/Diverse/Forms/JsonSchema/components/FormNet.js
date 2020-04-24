import React, { Component } from 'react';
import Form from "react-jsonschema-form";

const schema = {
  type: "object",
  title: "The Root Schema",
  description: "The root schema is the schema that comprises the entire JSON document.",
  default: {},
  required: ["checked", "dimensions", "id", "name", "price", "tags"],
  properties: {
      checked: {
          $id: "#/properties/checked",
          type: "boolean",
          title: "The Checked Schema",
          description: "An explanation about the purpose of this instance.",
          default: false,
          examples: [false],
          writeOnly: false,
          readOnly: false
      },
      dimensions: {
          $id: "#/properties/dimensions",
          type: "object",
          title: "The Dimensions Schema",
          description: "An explanation about the purpose of this instance.",
          default: {},
          examples: [{"width": 5.0, "height": 10.0}],
          required: ["width", "height"],
          properties: {
              width: {
                  $id: "#/properties/dimensions/properties/width",
                  type: "integer",
                  title: "The Width Schema",
                  description: "An explanation about the purpose of this instance.",
                  default: 0,
                  examples: [5],
                  writeOnly: false,
                  readOnly: false,
              },
              height: {
                  $id: "#/properties/dimensions/properties/height",
                  type: "integer",
                  title: "The Height Schema",
                  description: "An explanation about the purpose of this instance.",
                  default: 0,
                  examples: [10],
                  writeOnly: false,
                  readOnly: false,
              }
          },
          writeOnly: false,
          readOnly: false,
          minProperties: 0,
          additionalProperties: true,
          patternProperties: {},
          dependencies: {},
          propertyNames: {
              writeOnly: false,
              readOnly: false,
          }
      },
      id: {
          $id: "#/properties/id",
          type: "integer",
          title: "The Id Schema",
          description: "An explanation about the purpose of this instance.",
          default: 0,
          examples: [1],
          writeOnly: false,
          readOnly: false,
      },
      name: {
          $id: "#/properties/name",
          type: "string",
          title: "The Name Schema",
          description: "An explanation about the purpose of this instance.",
          default: "",
          examples: ["A green door"],
          writeOnly: false,
          readOnly: false,
          minLength: 0
      },
      price: {
          $id: "#/properties/price",
          type: "number",
          title: "The Price Schema",
          description: "An explanation about the purpose of this instance.",
          default: 0,
          examples: [12.5],
          writeOnly: false,
          readOnly: false,
      },
      tags: {
          $id: "#/properties/tags",
          type: "array",
          title: "The Tags Schema",
          description: "An explanation about the purpose of this instance.",
          default: [],
          examples: [["home", "green"]],
          items: {
              $id: "#/properties/tags/items",
              type: "string",
              title: "The Items Schema",
              description: "An explanation about the purpose of this instance.",
              default: "",
              examples: ["home", "green"],
              writeOnly: false,
              readOnly: false,
              minLength: 0,
          },
          writeOnly: false,
          readOnly: false,
          minItems: 0,
          uniqueItems: false,
          additionalItems: true,
      }
  },
  writeOnly: false,
  readOnly: false,
  minProperties: 0,
  additionalProperties: true,
  patternProperties: {},
  dependencies: {},
  propertyNames: {
      writeOnly: false,
      readOnly: false,
  }
}

const formData = {
    checked: false,
    dimensions: {
        width: 5,
        height: 10
    },
    id: 1,
    name: "A green door",
    price: 12.5,
    tags: [
        "home",
        "green"
    ]
};

export default class FormNet extends Component {
  render() {
    return (
      <div className="container">
        <Form
          schema={schema}
          //uiSchema={uiSchema}
          formData={formData}
          //onChange={log("changed")}
          //onSubmit={this.onSubmit}
          //onError={this.onError}
          />
      </div>
    )
  }
}

