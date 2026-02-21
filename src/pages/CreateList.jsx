import { useState } from "react";

export default function CreateList() {
  const [todos,setTodos] = useState([])

  //Add New TODO:
  const addTodo = ()=>{
    const value = {
      text: newTodo,
      completed: false,
      Editing: false,
      editText: newTodo,
    };
    

  }

  return (
    <>
      <h1>Todo List</h1>

      {/* Adds a new task */}
      <input type="text" placeholder="Add new todo" />

      {/* Button to add new task */}
      <button>Add</button>
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
