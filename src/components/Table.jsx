import React, { useEffect, useState } from "react";

function Table({todos}){

  function handleDone(task){
    fetch(`http://127.0.0.1:8000/todos/${task.id}/`, {
        method: "DELETE",
    })
    .then(res=>res.json())
    .then(()=>console.log('deleted'))
    .catch(err=>console.log(err))
  }
  const todoList = todos.map(todo=>
  {
    
  return (<tr key={todo.id}>
    <td>{todo.title}</td>
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