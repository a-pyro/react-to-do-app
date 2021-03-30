import React, { Component } from 'react';
import { Form, InputGroup, FormControl } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

export default class AddTodo extends Component {
  handleSumbit = (e) => {
    e.preventDefault();
    if (this.props.value === '') return alert('insert todo');
    this.props.addTodo(this.props.value);
  };

  render() {
    return (
      <div style={{ height: '20px' }}>
        <Form onSubmit={this.handleSumbit}>
          <InputGroup className='mb-3'>
            <FormControl
              onChange={this.props.onChange}
              type='text'
              name='title'
              value={this.props.value}
              placeholder='Add todo'
              aria-label='todo add'
              aria-describedby='basic-addon2'
            />
            <InputGroup.Append>
              <Button variant='outline-info' type='submit'>
                Add
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </Form>
      </div>
    );
  }
}
