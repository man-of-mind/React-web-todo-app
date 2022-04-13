import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import CreateTodo from './CreateTodo';
import EditTodo from './EditTodo';
import { useNavigate, useLocation } from 'react-router-dom';


function Main(props) {
  let navigate = useNavigate();
  let location = useLocation();
  console.log(location)
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
            <Route exact path='/edit_item/:id' element={<EditTodo 
              navigate={navigate}
              location={location} />} />
        </Routes>
      </main>
    );
}

export default Main;