// @ts-nocheck
import React from 'react';
import { TodoList } from './TodoList';
import { connect } from 'react-redux';
import * as actions from './actions';

export const App = props => {
  const onChange = ({ target }) => {
    props.updateTodo(target.value);
  };

  const addTodo = e => {
    e.preventDefault();
    props.createTodo(props.newTodo);
  };

  const { todos, newTodo } = props;

  return (
    <div>
      <form onSubmit={addTodo}>
        <input value={newTodo} onChange={onChange} />
        <label>
          Create todo: <span>{newTodo}</span>
        </label>
      </form>
      <TodoList todos={todos} />
    </div>
  );
};

export default connect(state => state.toJS(), actions)(App);
