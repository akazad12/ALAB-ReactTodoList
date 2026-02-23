import { useState } from "react";

let todoList = []

export default function CreateList() {
  const [todos,setTodos] = useState({
    todo: "",
    isCompleted: false
  })

  //Add  TODO:
  const addTodo = ()=>{
    if(todos.todo){
      todoList.push(todos)
      setTodos({
        todo: "",
        isCompleted:false
      })
    }
    console.log("list of todos", todoList)
 
  }

  return (
    <>
      <h1>Todo List</h1>

      {/* Adds a new task */}
      <input 
      type="text" 
      value = {todos.todo}
      placeholder="Add new todo"
      onChange={(e)=> setTodos({
        todo: e.target.value,
        isCompleted: false
      })} />

      {/* Button to add new task */}
      <button onClick={addTodo}>Add</button>
      {/* ============================================================ */}

      {/* List of Todos with delete and edit functionality */}
      <ul>
        <li>
          <input type="checkbox" />
          {/* render this if editing */}

          <>
            <input type="text" />
            <button>Save</button>
          </>

          {/* render this if not editing */}
          <>
            <h3>
              completed stuff
              <button>Edit</button>
              <button>Delete</button>
            </h3>
          </>
        </li>
      </ul>
    </>
  );
}
