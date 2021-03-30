import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';

export default class App extends Component {
  state = {
    todos: [
      { id: 1, title: 'Diventare master react', completed: false },
      { id: 2, title: 'lavare morty', completed: false },
      { id: 3, title: 'portare via la spazza', completed: false },
    ],
  };

  markComplete = ({ id }) => {
    console.log(id);
    // this.setState({
    //   todos: this.state.todos.reduce((acc, cv) => {
    //     if (cv.id === id) {
    //       cv.completed = !cv.completed;
    //     }
    //     acc.push(cv);
    //     return acc;
    //   }, []),
    // });

    // or
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) todo.completed = !todo.completed;
        return todo;
      }),
    });
  };

  deleteTodo = ({ id }) => {
    this.setState({
      todos: this.setState.todos.filter((todo) => todo.id !== id),
    });
  };
  render() {
    // console.log(this.state.todos);
    return (
      <div>
        <Todos markComplete={this.markComplete} todos={this.state.todos} />
      </div>
    );
  }
}
