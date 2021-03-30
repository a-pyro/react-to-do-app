import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MdDeleteForever } from '@react-icons/all-files/fa/MdDeleteForever';

export default class TodoItem extends Component {
  getStyle = () => {
    return {
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
          <input
            onChange={() => this.props.markComplete(this.props.todo)}
            type='checkbox'
          />{' '}
          {this.props.todo.title}
          <MdDeleteForever
            onClick={() => this.props.deleteTodo(this.props.todo)}
          />
        </p>
      </div>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
};
