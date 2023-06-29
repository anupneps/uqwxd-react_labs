import React from "react";
import TodoItem from "./TodoItem";

const TodoForm = ({
  todos,
  todo,
  setTodo,
  handleSubmit,
  deleteTodo,
  toggleComplete,
  editTodo,
}) => {
  return (
    <div id="todo-list">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        />
        <button type="submit">Add Todo</button>
      </form>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
      ))}
    </div>
  );
};
export default TodoForm;