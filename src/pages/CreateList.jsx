import { useState } from "react";



const ToDoElement= ({todo,index,toggleComplete})=>{
  return(
    <li>
      {todo.todo}
      <button
       onClick= {()=>toggleComplete(index)}
      >
        Done
      </button>

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

  //completed Todo
const onCompletion = (index) => {
  const updatedTodos = todos.map((todo, i) =>
    i === index
      ? { ...todo, isCompleted: true }
      : todo
  );

  setTodos(updatedTodos);
};

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
            key ={index}
            todo = {value}
            index = {index}         
            toggleComplete={onCompletion} 
          />
        )
      })
       }
      
      </ul>
    </>
  );
}
