import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class CreateTodo extends Component {
  constructor(props) {
    super(props);
    this.onAdd = this.onAdd.bind(this);
  }
  onAdd(e) {
    this.props.onAdd(e);
    this.props.navigate('/');
  }
  render() {
    return (
      <div className='form-container'>
        <form className='form-child-big' onSubmit={this.onAdd}>
          <input maxLength='25' placeholder='Type something here' />
          <br />
          <br />
          <button>Add</button>
        </form>
        <Link className='form-child-small back-link' to='/'>
          Back
        </Link>
      </div>
    );
  }
}
export default CreateTodo;