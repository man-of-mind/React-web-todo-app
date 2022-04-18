import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function EditItem(props) {
  let params = useParams();
  const item = props.items.filter(value => value.id === Number(params.id))
  
  function onEdit(e) {
      e.preventDefault()
      if (e.target[0].value.length !== 0) {
          item.name = e.target[0].value;
          item.start = e.target[1].value;
          item.end = e.target[2].value;
          props.onEdit(item);
      }
    props.navigate('/');
  }
 
  const [ newVal, setVal ] = useState(item[0].name)
  const [ newStart, setStart ] = useState(item[0].start)
  const [ newEnd, setEnd ] = useState(item[0].end)
  return(
      <div>
        <form className='todo-form' onSubmit={onEdit}>
          <input
            type='text'
            placeholder='Update your plan'
            name='text'
            className='todo-input edit'
            value={newVal}
            onChange={(e) => setVal(e.target.value)}
          />
          <br></br>
          <br></br>
          <input
            type='text'
            placeholder='Update your plan'
            name='text'
            className='todo-input edit'
            value={newStart}
            onChange={(e) => setStart(e.target.value)}
          />
          <br/>
          <br/>
          <input
            type='text'
            placeholder='Update your plan'
            name='text'
            className='todo-input edit'
            value={newEnd}
            onChange={(e) => setEnd(e.target.value)}
          />
          <br></br>
          <br></br>
          <div className='add-back-button'>
            <button className='todo-button edit'>Update</button>
            <Link className='back' to='/'>
              Back
            </Link>
          </div>
        </form>
      </div>
    );
  }


export default EditItem;