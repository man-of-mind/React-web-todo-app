import React, { Component } from 'react';
import Item from './item';

class Home extends Component {
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
            <h1>Welcome to the Todo-App!</h1>
            <div className='item-container'>
                {items}
            </div>
        </div>
    );
  }
}
export default Home;