import React from "react"; // , { PropTypes }

export default function TodoList({ todos }) {
  const todoItems = todos.map((todo, i) => <li key={i}>{todo.title}</li>);

  return <ul>{todoItems}</ul>;
}
