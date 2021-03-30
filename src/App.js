import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import Search from './components/Search';
import { v4 as uuidv4 } from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {
  state = {
    todos: [],
    query: '',
  };

  componentDidMount = () => {
    const storedTodos = JSON.parse(localStorage.getItem('todos')) ?? [];
    this.setState({ todos: storedTodos });
  };

  componentDidUpdate = (prevState) => {
    localStorage.setItem('todos', JSON.stringify(this.state.todos));
    if (this.state.todos.length === 0) localStorage.clear();
  };
  markComplete = ({ id }) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) todo.completed = !todo.completed;
        return todo;
      }),
    });
  };

  deleteTodo = ({ id }) => {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== id),
    });
  };
  onChange = (e) => {
    this.setState({ query: e.target.value });
  };

  addTodo = (todoText) => {
    const newTodo = {
      id: uuidv4(),
      title: todoText,
      completed: false,
    };
    this.setState({ todos: [...this.state.todos, newTodo], query: '' });
  };

  render() {
    // console.log(this.state.todos);
    return this.state.todos.length > 0 ? (
      <div className='app'>
        <Search />
        <Todos
          deleteTodo={this.deleteTodo}
          markComplete={this.markComplete}
          todos={this.state.todos}
        />
        <AddTodo
          addTodo={this.addTodo}
          onChange={this.onChange}
          value={this.state.query}
        />
      </div>
    ) : (
      <div className='app'>
        <h1>No ToDos!</h1>
        <AddTodo
          addTodo={this.addTodo}
          onChange={this.onChange}
          value={this.state.query}
        />
      </div>
    );
  }
}
