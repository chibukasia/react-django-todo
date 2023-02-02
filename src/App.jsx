import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Form from './components/Form'
import Table from './components/Table'

function App() {
  // const [count, setCount] = useState(0)
  const [todos, setTodos] = useState([])

  useEffect(()=>{
    fetch('http://127.0.0.1:8000/todos/')
    .then(res=>{
        if (res.ok){
            res.json().then(data=>setTodos(data))
        }else{
            res.json().then(console.log)
        }
    })
    .catch(err=>{
        console.log(`This was the error: ${err}`)
    })
  },[])

  return (
    <div className="App">
      <h2>Hello world</h2>
      <Table todos={todos} setTodos={setTodos}/>
      <Form todos={todos} setTodos={setTodos}/>
    </div>
  )
}

export default App
