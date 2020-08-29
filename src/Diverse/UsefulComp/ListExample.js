import React from "react";
import { FixedSizeList as List } from "react-window";
import "./ListExample.css";

const Row = ({ index, style }) => (
  <div className={index % 2 ? "ListItemOdd" : "ListItemEven"} style={style}>
    Row {index}
  </div>
);

export const ListExample = () => (
  <List height={500} itemCount={1000} itemSize={35} width={500}>
    {Row}
  </List>
);

const Column = ({ index, style }) => (
  <div className={index % 2 ? "ListItemOdd" : "ListItemEven"} style={style}>
    Column {index}
  </div>
);

export const ColumnExample = () => (
  <List
    height={100}
    itemCount={1000}
    itemSize={100}
    layout="horizontal"
    width={500}
  >
    {Column}
  </List>
);

// https://react-window.now.sh/#/examples/list/fixed-size

// https://codesandbox.io/s/github/bvaughn/react-window/tree/master/website/sandboxes/fixed-size-list-vertical

// https://codesandbox.io/s/github/bvaughn/react-window/tree/master/website/sandboxes/fixed-size-list-horizontal
