import React, { useEffect, useState } from "react";

function Table({todos}){

  function handleDone(e){
    console.log(e.target.value)
    fetch('http://127.0.0.1:8000/todos/', {
        method: "DELETE",
    }).then(res=>res.json())
    .then(()=>console.log('deleted'))
  }
  const todoList = todos.map(todo=>
  {
    
  return (<tr key={todo.id}>
    <td>{todo.title}</td>
    <td><button onClick={handleDone} value={todo.id}>X</button></td>
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