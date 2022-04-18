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
      <div>
        <form className='todo-form' onSubmit={this.onAdd}>
          <input 
            type='text'
            placeholder='Enter a todo'
            name='text'
            className='todo-input'
          />
          <br/>
          <br/>
          <input 
            type='text'
            placeholder='Enter start time'
            name='text'
            className='todo-input'
          />
          <br/>
          <br/>
          <input 
            type='text'
            placeholder='Enter end time'
            name='text'
            className='todo-input'
          />
          <br/>
          <br/>
          <div className='add-back-button'>
            <button className='todo-button back'>Add todo</button>
            <Link className='back' to='/'>
              Back
            </Link>
          </div>
        </form>        
      </div>
    );
  }
}
export default CreateTodo;