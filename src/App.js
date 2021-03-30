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

  markComplete = (todo) => {
    console.log(todo.id);
    this.setState({
      todos: this.state.todos.reduce((acc, cv) => {
        if (cv.id === todo.id) {
          cv.completed = !cv.completed;
        }
        acc.push(cv);
        return acc;
      }, []),
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
