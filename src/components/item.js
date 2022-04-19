import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TiCancel } from 'react-icons/ti'
import { TiEdit } from 'react-icons/ti'


function Item(props) {
    const [ check, setChecked ] = useState(props.item.isComplete ? true : false);
    let todos = JSON.parse(localStorage.getItem('data'))
    const [ items, setItems ] = useState(todos);
    function onDelete() {
        props.onDelete(props.item);
    }

    function onEdit(e) {
        e.preventDefault();
        let newItem = props.item;
        if (e.target[0].value.length !== 0) {
          newItem.name = e.target[0].value;
          newItem.start = e.target[1].value;
          newItem.end = e.target[2].value;
          newItem.isComplete = false;
          props.onEdit(newItem);
        }
    }
    const url = {
        pathname: `/edit_item/${props.item.id}`,
        state: {
            name: props.item.name,
            onEdit: onEdit
        }
    }
    const completeTodo = e => {
        todos = items.map(item => {
            if (item.id === props.item.id) {
                item.isComplete = !item.isComplete
            }
            return item;
        });
        setItems(todos);
        
        localStorage.setItem('data', JSON.stringify(items))
        setChecked(e.target.checked)
    }
    return (
        <div className='todo-row'>
        <label className="contain">
            <input 
                type="checkbox" 
                checked={check} 
                onChange={(e) => completeTodo(e)}/>
            <span className="checkmark"></span>
        </label>
        <div key={props.item.id} className='todo-text'>
                {props.item.name}
        </div>
        <div className='icons'>
            <TiCancel onClick={onDelete} className='delete-icon'/>
            <Link to={url}>
                <TiEdit className="edit-icon"/>
            </Link>
        </div>
        </div>
    );
}
export default Item;