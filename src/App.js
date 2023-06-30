import React, { useState, useEffect } from "react";

import TodoForm from "./components/TodoForm";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  useEffect(() => {
    const json = localStorage.getItem("todos");
    const loadedTodos = JSON.parse(json);
    if (loadedTodos) {
      setTodos(loadedTodos);
    }
  }, []);

  useEffect(() => {
    if (todos.length > 0) {
      const json = JSON.stringify(todos);
      localStorage.setItem("todos", json);
    }
  }, [todos]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: new Date().getTime(),
      text: todo.trim(),
      completed: false,
    };
    if (newTodo.text.length > 0) {
      setTodos([...todos].concat(newTodo));
      setTodo("");
    } else {
      alert("Enter Valid Task");
      setTodo("");
    }
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const toggleComplete = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const editTodo = (id, newText) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          text: newText,
        };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };
  const completedItem = todos.filter((todo) => todo.completed);

  return (
    <>
      <div className="app-header">
        <h1>Groceries-List</h1>

      </div>
      <div className="App">
        <div className="active-Items">
          <p>You have </p>
          <h2 className="active-number"> {todos.filter((todo) => !todo.completed).length} </h2>
          <p>Active Items</p>
        </div>

        <div className="todo-Items">
          <TodoForm
            todos={todos}
            todo={todo}
            setTodo={setTodo}
            handleSubmit={handleSubmit}
            deleteTodo={deleteTodo}
            toggleComplete={toggleComplete}
            editTodo={editTodo}
          />
        </div>

        <div className="completed-Items">
          <h2>Recently Completed Items</h2>
          <ul>
            {completedItem.length > 0 && completedItem
              .map((todo) => (
                <li key={todo.id}>{todo.text}</li>
              ))}

          </ul>
        </div>
      </div>
    </>
  );
};

export default App;
