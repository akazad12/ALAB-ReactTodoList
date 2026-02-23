import { useState } from "react";

let todoList = []

const ToDoElement= ({value,index})=>{
  console.log("value",value)
  return(
    <li>
      {value.todo}
    </li>
  )
}

export default function CreateList() {
  const [todos, setTodos] = useState([]);   
  const [input, setInput] = useState("");  

  //Add  TODO:
  const addTodo = ()=>{
    if(input==="") return;
    const newTodo= {
        todo: input,
        isCompleted:false
      }
    
    setTodos([...todos,newTodo]);
    setInput("");
 
  }

  return (
    <>
      <h1>Todo List</h1>

      {/* Adds a new task */}
      <input 
      type="text" 
      value = {input}
      placeholder="Add new todo"
      onChange={(e)=> setInput(e.target.value)} />

      {/* Button to add new task */}
      <button onClick={addTodo}>Add</button>
      
      {/* ============================================================ */}

      {/* List of Todos with delete and edit functionality */}
      <ul>
      {
       todos.map((value,index) => {
        return(
          <ToDoElement
            key = {index}
            value = {value}
            index = {index}          
          />
        )
      })
       }
      
      </ul>
    </>
  );
}
