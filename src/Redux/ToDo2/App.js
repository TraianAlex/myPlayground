import React, { Component } from "react"; // , PropTypes
import TodoList from "./TodoList";
import { connect } from "react-redux";
import * as actions from "./actions";

export class App extends Component {
  onChange = (e) => {
    this.props.updateTodo(e.target.value);
  };

  addTodo = (e) => {
    e.preventDefault();
    this.props.createTodo(this.props.newTodo);
  };

  render() {
    const { todos, newTodo } = this.props;

    return (
      <div>
        <form onSubmit={this.addTodo.bind(this)}>
          <input value={newTodo} onChange={this.onChange.bind(this)} />
          <label>
            Create todo: <span>{newTodo}</span>
          </label>
        </form>
        <TodoList todos={todos} />
      </div>
    );
  }
}

export default connect((state) => state.toJS(), actions)(App);
