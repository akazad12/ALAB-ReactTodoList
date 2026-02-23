import { useState } from "react";

const ToDoElement = ({ todo, index, toggleComplete, deleteTodo, startEdit, saveEdit, handleEditChange }) => {
  return (
    <li style={{ marginBottom: "10px" }}>
      <input
        type="checkbox"
        checked={todo.isCompleted}
        onChange={() => toggleComplete(index)}
      />

      {todo.isEditing ? (
  <>
    <input
      type="text"
      value={todo.editText}
      onChange={(e) =>
        handleEditChange(index, e.target.value)
      }
    />
    <button onClick={() => saveEdit(index)}>
      Save
    </button>
  </>
) : (
  <>
    <span>
      {todo.todo}
    </span>

    <button
      onClick={() => deleteTodo(index)}
      disabled={!todo.isCompleted}
    >
      Delete
    </button>

    <button onClick={() => startEdit(index)}>
      Edit
    </button>
  </>
)}
    </li>
  );
};
export default function CreateList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  //Add  TODO:
  const addTodo = () => {
    if (input === "") return;
    const newTodo = {
      todo: input,
      isCompleted: false,
      isEditing: false,
      editText: input
    };

    setTodos([...todos, newTodo]);
    setInput("");
  };

  //completed Todo
  const onCompletion = (index) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, isCompleted: true } : todo,
    );

    setTodos(updatedTodos);
  };

  const deleteTodo = (index) => {
    const filtered = todos.filter((_, i) => i !== index);
    setTodos(filtered);
  };

  const startEdit = (index) => {
  const updated = todos.map((todo, i) =>
    i === index
      ? { ...todo, isEditing: true }
      : todo
  );

  setTodos(updated);
};

const handleEditChange = (index, value) => {
  const updated = todos.map((todo, i) =>
    i === index
      ? { ...todo, editText: value }
      : todo
  );

  setTodos(updated);
};

const saveEdit = (index) => {
  const updated = todos.map((todo, i) =>
    i === index
      ? {
          ...todo,
          text: todo.editText,
          isEditing: false,
        }
      : todo
  );

  setTodos(updated);
};

  return (
    <>
      <h1>Todo List</h1>

      {/* Adds a new task */}
      <input
        type="text"
        value={input}
        placeholder="Add new todo"
        onChange={(e) => setInput(e.target.value)}
      />

      {/* Button to add new task */}
      <button onClick={addTodo}>Add</button>

      {/* ============================================================ */}

      {/* List of Todos with delete and edit functionality */}
      <ul>
        {todos.map((value, index) => {
          return (
            <ToDoElement
              key={index}
              todo={value}
              index={index}
              toggleComplete={onCompletion}
              deleteTodo={deleteTodo}
              startEdit={startEdit}
              saveEdit={saveEdit}
              handleEditChange={handleEditChange}
            />
          );
        })}
      </ul>
    </>
  );
}
