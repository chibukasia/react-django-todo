import React, { useEffect, useState } from "react";

function Table({todos, setTodos}){

  function handleDone(task){
    fetch(`http://127.0.0.1:8000/todos/${task.id}/`, {
        method: "DELETE",
    })
    .then(res=>res.json())
    .then(()=>{
      const filtered = todos.filter(todo=>todo.id != task.id)
      console.log(filtered)
    })
    .catch(err=>console.log(err))
  }

  function handleTaskDone(task){
    fetch(`http://127.0.0.1:8000/todos/${task.id}/`,{
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({completed: !task.completed})
    })
    .then(res=>res.json())
    .then(data=>{
      const updatedTodos = todos.map(todo=>{
        if (todo.id==task.id){
          return data
        }
        return todo
      })
      setTodos(updatedTodos)
    })
  }
  const todoList = todos.map(todo=>
  {
    
  return (<tr key={todo.id}>
    <td onClick={()=>handleTaskDone(todo)}>{todo.completed ? <strike>{todo.title}</strike>: todo.title}</td>
    <td><button onClick={()=>handleDone(todo)} value={todo.id}>X</button></td>
  </tr>
  )
})
  return (
    <div>
        <table>
            <thead>
                <tr>
                    <td>Title</td>
                    <td>Complete</td>
                </tr>
            </thead>
            <tbody>
            {todoList}
            </tbody>
        </table>
    </div>
  )
}

export default Table