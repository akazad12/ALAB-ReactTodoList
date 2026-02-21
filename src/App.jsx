import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Todo List</h1>
    
    {/* Adds a new task */}
    <input
      type = "text"
      placeholder= "Add new todo"
    />
    
    </>
  )
}

export default App
