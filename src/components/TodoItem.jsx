import React, { Component } from 'react';

import { MdDeleteForever } from 'react-icons/md';
import { ListGroup } from 'react-bootstrap';

export default class TodoItem extends Component {
  getStyle = () => {
    return {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px solid #ccc',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none',
    };
  };

  render() {
    return (
      <div style={this.getStyle()}>
        <p>
          {this.props.todo.completed && (
            <input
              checked
              onChange={() => this.props.markComplete(this.props.todo)}
              type='checkbox'
            />
          )}
          {!this.props.todo.completed && (
            <input
              onChange={() => this.props.markComplete(this.props.todo)}
              type='checkbox'
              name='check'
            />
          )}{' '}
          {this.props.todo.title}
        </p>
        <div>
          <MdDeleteForever
            onClick={() => this.props.deleteTodo(this.props.todo)}
          />
        </div>
      </div>
    );
  }
}
