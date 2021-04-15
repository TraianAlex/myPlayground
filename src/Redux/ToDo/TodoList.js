import React from 'react';

export const TodoList = ({ todos }) => {
  const todoItems = todos.map((todo, i) => <li key={i}>{todo.title}</li>);

  return <ul>{todoItems}</ul>;
};

/**********************************************************
import React from "react";

export default function TodoList({ todos }) {
  const todoItems = todos.map((todo, i) => <li key={i}>{todo.title}</li>);

  return <ul>{todoItems}</ul>;
}
 */
