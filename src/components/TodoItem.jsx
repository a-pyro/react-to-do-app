import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { MdDeleteForever } from '@react-icons/all-files/fa/MdDeleteForever';
import { MdDeleteForever } from 'react-icons/md';

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
          <input
            onChange={() => this.props.markComplete(this.props.todo)}
            type='checkbox'
          />{' '}
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

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
};
