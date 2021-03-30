import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
export default class Search extends Component {
  render() {
    return (
      <Form className='bg-info p-1'>
        <Form.Group>
          <Form.Control type='text' placeholder='Search Todos' />
        </Form.Group>

        <Form.Group controlId='formBasicCheckbox'>
          <Form.Check type='checkbox' label='Show completed' />
        </Form.Group>
      </Form>
    );
  }
}
