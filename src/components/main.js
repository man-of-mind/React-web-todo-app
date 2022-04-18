import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import CreateTodo from './CreateTodo';
import EditItem from './EditTodo';
import { useNavigate } from 'react-router-dom';


function Main(props) {
  let navigate = useNavigate();
    return (
      <main>
        <Routes>
            <Route path='/' element={<Home 
                    items={props.items}
                    onDelete={props.onDelete}
                    onEdit={props.onEdit} />
            } />
            <Route path='/add' element={<CreateTodo 
                    onAdd={props.onAdd} navigate={navigate}/>
            } />
            <Route exact path='/edit_item/:id' 
              element={<EditItem onEdit={props.onEdit} 
              items={props.items}
              navigate={navigate}/>
             } />
        </Routes>
      </main>
    );
}

export default Main;