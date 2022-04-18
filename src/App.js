import './App.css';
import Header from './components/header';
import Main from './components/main';
import { useState, useEffect } from 'react'

function App(props) {
  const [ items, setItems ] = useState([]);
  const [ nextId, setNextId ] = useState(0);
  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(items));
  }, [items]);


  function handleAdd(e) {
    e.preventDefault();
    let newItems = items;
    if (e.target[0].value.length !== 0) {
      newItems.push({
        name: e.target[0].value, 
        id: nextId, start: e.target[1].value, 
        end: e.target[2].value
      });
      setItems(newItems)
      setNextId(nextId + 1)
      localStorage.setItem('data', JSON.stringify(items))
    }
  }

  function handleDelete(itemToBeDeleted) {
    let currentItems = JSON.parse(localStorage.getItem('data'))
    const newItems = currentItems.filter(item => {
      return item.id !== itemToBeDeleted.id;
    });
    setItems(newItems)
    localStorage.setItem('data', JSON.stringify(items))
  }

  function handleEdit(itemToBeEdited) {
    let newItems = JSON.parse(localStorage.getItem('data'))
    newItems = newItems.map(item => {
      if (item.id === itemToBeEdited[0].id) {
        item.name = itemToBeEdited.name;
        item.start = itemToBeEdited.start;
        item.end = itemToBeEdited.end;
      }
      return item;
    });
    setItems(newItems)
    localStorage.setItem('data', JSON.stringify(items))
  }
  
  return (
    <div>
      <Header />
      <div className='todo-app'>
        <Main
          items={items}
          onAdd={handleAdd} 
          onDelete={handleDelete} 
          onEdit={handleEdit} />
      </div>
    </div>
  );
}


export default App;
