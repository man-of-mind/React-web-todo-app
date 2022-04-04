import React, { useState } from 'react'
import Todo from './Todo';
import TodoForm from './TodoForm'

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [totalTask, setTotal] =  useState("0");

    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete
            }
            return todo
        })
        setTodos(updatedTodos)
    }

    const removeTodo = id => {
        const removedArr = [...todos].filter(todo => todo.id !== id)
        setTodos(removedArr)
        setTotal(removedArr.length)
    }
    
    const updateTodo = (todoId, newValue) => {
        if(!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }
        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
    };

    const addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }
        const newTodos = [todo, ...todos];
        setTodos(newTodos);
        setTotal(newTodos.length)
        
    };

    return (
        <div>
            <h1>What is your plan for today?</h1>
            <TodoForm onSubmit={addTodo} />
            <div className='tasks-number'>
                <h3>Total task(s): {totalTask}</h3>
                <h3>Incomplete tasks(s): 0{}</h3>
            </div>
            <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo}/>
        </div>
    )
}

export default TodoList