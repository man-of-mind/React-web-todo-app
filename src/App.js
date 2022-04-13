import './App.css';
import TodoList from './components/TodoList';
import React, { Component } from 'react';
import Header from './components/header';
import Main from './components/main';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      nextId: 0
    };

    this.handleAdd = this.handleAdd.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);

  }

  handleAdd(e) {
    e.preventDefault();
    let newItems = this.state.items;
    if (e.target[0].value.length !== 0) {
      newItems.push({name: e.target[0].value, id: this.state.nextId});
      this.setState({
        items: newItems,
        nextId: this.state.nextId + 1
      });
    }
  }

  handleDelete(itemToBeDeleted) {
    const newItems = this.state.items.filter(item => {
      return item.id !== itemToBeDeleted.id;
    });
    this.setState({
      items: newItems
    });
  }

  handleEdit(itemToBeEdited) {
    let newItems = this.state.items;
    newItems = newItems.map(item => {
      if (item.id === itemToBeEdited.id) {
        item.name = itemToBeEdited.name;
      }
      return item;
    });
    this.setState({
      items: newItems
    });
  }
  

  render() {
    return (
      <div className='App'>
        <Header className="child-header" />
        <Main className="child-main" 
          items={this.state.items}
          onAdd={this.handleAdd} 
          onDelete={this.handleDelete} 
          onEdit={this.handleEdit} />
{/*        <TodoList /> */}
      </div>
    );
  }
}

export default App;
