import React, { Component } from 'react';
import TodoItem from './TodoItem';

export default class Todos extends Component {
  componentWillUnmount = () => {
    console.log('Todos unmounted');
  };
  render() {
    return this.props.todos.length > 0 ? (
      this.props.todos.map((todo) => (
        <TodoItem
          deleteTodo={this.props.deleteTodo}
          markComplete={this.props.markComplete}
          key={todo.id}
          todo={todo}
        />
      ))
    ) : (
      <h1>No ToDos!</h1>
    );
  }
}
