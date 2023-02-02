import React, { useState } from 'react'

function Form({todos, setTodos}) {
  const [title, setTitle] = useState('')

  function handleChange(e){
    setTitle(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault(e)
    fetch('http://127.0.0.1:8000/todos/', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: title, complete: false
      })
    })
    .then(res=>{
      if(res.ok){
        res.json().then(data=>setTodos([...todos, data]))
      }else{
        res.json().then(err=>console.log(err.required))
      }
    })
    
    .catch(console.error)
  }
  return (
    <div className=''>
      <form className='flex ' onSubmit={handleSubmit}>
        <label htmlFor='title' className=''>Add new todo</label><br/>
        <input type={'text'} name='title' id='title' className='' onChange={handleChange}/><br/>
        <button type='submit'>Add Todo</button>
      </form>
    </div>
  )
}

export default Form