import React, { useEffect } from 'react'

function TodoForm() {
    const [input, setInput] = useEffect('');
    return (
    <form className="todo-form">
        <input 
            type='text' 
            placeholder='Enter a todo' 
            value={input} 
            name='text' 
            className='todo-app'>
        </input>
        <button className='todo-button'>Add todo</button>
    </form>
  )
}

export default TodoForm