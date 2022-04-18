import React, { Component } from 'react';
import Item from './item';
import { Link } from 'react-router-dom'

class Home extends Component {
  constructor() {
    super();
    this.database = JSON.parse(localStorage.getItem('data'));
  }
  
  render() {
    let items = this.props.items.map((item) => {
        return (
          <Item className='item-child'
            key={item.id}
            item={item}
            onDelete={this.props.onDelete}
            onEdit={this.props.onEdit}
          />
        );
    });
    return (
        <div>
            <h1 className='heading-text'>My todo lists</h1>
            {this.props.items.length !== 0 ? <div className='tasks-number'>
                <h3>Total task(s): {this.props.items.length}</h3>
            </div> : <div className='no-task'>
              <h3>You don't have any task, add new task <Link to='/add'>here</Link></h3>
            </div>}
            
            <div className='item-container'>
                {items}
            </div>
        </div>
    );
  }
}
export default Home;