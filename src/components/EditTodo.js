import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import TimeInput from './TimeField';
import { useForm } from "react-hook-form";

function EditItem(props) {
  let params = useParams();
  const item = props.items.filter(value => value.id === Number(params.id))
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  function onEdit(data) {
      
    item.name = data.edittodo;
    item.start = data.startTime;
    item.end = data.endTime;
    props.onEdit(item);
      
    props.navigate('/');
  }
 
  const [ newVal, setVal ] = useState(item[0].name)
  const [ newStart, setStart ] = useState(item[0].start)
  const [ newEnd, setEnd ] = useState(item[0].end)
  return(
      <div>
        <form className='todo-form' onSubmit={handleSubmit(onEdit)}>
          <div className='input-style'>
            <label>Update task: </label>
            <input
            type='text'
            placeholder='Update your plan'
            name='text'
            className='todo-input edit'
            value={newVal}
            onChange={(e) => setVal(e.target.value)}
            {...register("edittodo", { required: true, minLength: 5 })}
          />
          </div>
          {errors.edittodo && <p className='error-msg'>Please check the edited todo</p>} 
          <br></br>
          <div className='input-style'>
            <label>Start Time: </label>
            <TimeInput 
              time={newStart} 
              onTimeChange={(event, value) => setStart(event.target.value)}
              validation = {{...register("startTime", { required: true, pattern: /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/})}}
            />
          </div>
          {errors.startTime && <p className='error-msg'>Please check the start time</p>}
          <br/>
          <div className='input-style'>
            <label>End Time: </label>
            <TimeInput 
              time={newEnd} 
              onTimeChange={(event, value) => setEnd(event.target.value)}
              validation = {{...register("endTime", { required: true, pattern: /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/})}}
            />
          </div>
          {errors.endTime && <p className='error-msg'>Please check the end time</p>}
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