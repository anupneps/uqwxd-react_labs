import './App.css';
import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';

function App() {
  const [todos, setTodos] = useState([]);
  const [todoEditing, setTodoEditing] = useState(null);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const toggleComplete = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const startEditing = (id, updatedTodo) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return updatedTodo;
      }
      return todo;
    });
    setTodos(updatedTodos);
    setTodoEditing(id)
  };

  const submitEdits = (id, updatedText) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, text: updatedText };
      }
      return todo;
    });
    setTodos(updatedTodos);
    setTodoEditing(null);
  };

  return (
    <div id="todo-list">
      <h1>Todo List</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
          startEditing={startEditing}
          todoEditing={todoEditing}
          submitEdits={submitEdits}
        />
      ))}
    </div>
  );
}

export default App;
