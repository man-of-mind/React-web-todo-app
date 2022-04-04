import React, { useState } from 'react'
import { TiCancel } from 'react-icons/ti'
import { TiEdit } from 'react-icons/ti'
import TodoForm from './TodoForm'

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });

    const submitUpdate = value => {
        updateTodo(edit.id, value);
        setEdit({
            id: null,
            value: ''
        });
    };

    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} />
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isComplete, setIsComplete] = useState(new Array(todos.length).fill(false));
    const handleOnChange = (position) => {
    const updatedCheckedState = isComplete.map((item, index) =>
        index === position ? !item : item
    );
    setIsComplete(updatedCheckedState);
    };
    
    


    return todos.map((todo, index) => (
        <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>
            <label class="contain">
                <input type="checkbox" checked={isComplete[index]} onChange={handleOnChange(index)}/>
                <span class="checkmark"></span>
            </label>
            <input type="checkbox" id="topping" name="topping" value="Paneer" />
            <div key={todo.id} onClick={() => completeTodo(todo.id)} className='todo-text'>
                    {todo.text}
            </div>
            <div className='icons'>
                <TiCancel onClick={() => removeTodo(todo.id)} className='delete-icon'/>
                <TiEdit onClick={ () => setEdit({id: todo.id, value: todo.text})} className="edit-icon"/>
            </div>
        </div>
    ));

};

export default Todo;