import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TimeInput from './TimeField';
import { useForm } from "react-hook-form";


function CreateTodo(props) {
  const [ startTime, setStart ] = useState('00:00');
  const [ endTime, setEnd ] = useState('00:00');
  const { register, handleSubmit, formState: { errors } } = useForm();

  function onAdd(e) {
    props.onAdd(e);
    props.navigate('/');
  }
  
  return (
    <div>
      <form className='todo-form' onSubmit={handleSubmit(onAdd)}>
        <div className='input-style'>
          <label className='text'>New task:  </label>
          <input 
            type='text'
            placeholder='New Todo'
            name='text'
            className='todo-input'
            {...register("newtodo", { required: true, minLength: 5 })}
          />
        </div>
        {errors.newtodo && <p className='error-msg'>Please check the new todo</p>}  
        <br/>
        <div className='input-style'>
          <label>Start Time: </label>
          <TimeInput 
            time={startTime} 
            onTimeChange={(event, value) => setStart(event.target.value)}
            validation = {{...register("startTime", { required: true, pattern: /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/})}}
          />
        </div>
        {errors.startTime && <p className='error-msg'>Please check the start time</p>}
        <br></br>
        <div className='input-style'>
          <label>End Time: </label>
          <TimeInput 
            time={endTime} 
            onTimeChange={(event, value) => setEnd(event.target.value)}
            validation = {{...register("endTime", { required: true, pattern: /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/ })}}
          />
        </div>
        {errors.endTime && <p className='error-msg'>Please check the end time</p>}
        <br/>
        <div className='add-back-button'>
          <button className='todo-button back' type='submit'>Add todo</button>
          <Link className='back' to='/'>
            Back
          </Link>
        </div>
      </form>        
    </div>
  );
}


export default CreateTodo;