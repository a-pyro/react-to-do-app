import React, { Component } from 'react';

export default class AddTodo extends Component {
  handleSumbit = (e) => {
    e.preventDefault();
    if (this.props.value === '') return alert('insert todo');
    this.props.addTodo(this.props.value);
  };

  render() {
    return (
      <div style={{ height: '20px' }}>
        <form onSubmit={this.handleSumbit}>
          <input
            style={{ width: '80%' }}
            onChange={this.props.onChange}
            type='text'
            name='title'
            value={this.props.value}
          />
          <button style={{ width: '20%' }} type='submit'>
            Add
          </button>
        </form>
      </div>
    );
  }
}
