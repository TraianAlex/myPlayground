import React, { Component } from "react"; // , PropTypes
import TodoList from "./TodoList";
import { connect } from "./Provider";
import { CREATE_TODO, UPDATE_TODO } from "./store";

class App extends Component {
  onChange = (e) => {
    this.props.dispatch({ type: UPDATE_TODO, todo: e.target.value });
  };

  addTodo = (e) => {
    e.preventDefault();
    this.props.dispatch({ type: CREATE_TODO, todo: this.props.newTodo });
  };

  render() {
    const { todos, newTodo } = this.props;

    return (
      <div>
        <h2>To do List</h2>
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

export default connect((state) => state)(App);
