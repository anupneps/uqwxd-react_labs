import React, { useState } from "react";

const TodoItem = ({ todo, toggleComplete, deleteTodo, editTodo }) => {
  const [editingText, setEditingText] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
    setEditingText(todo.text);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  const handleSubmitEdit = () => {
    editTodo(todo.id, editingText);
    setIsEditing(false);
  };

  return (
    <div className="todo">
      <div className="todo-text">
        <input
          type="checkbox"
          id="completed"
          checked={todo.completed}
          onChange={() => toggleComplete(todo.id)}
        />
        {isEditing ? (
          <input
            type="text"
            value={editingText}
            onChange={(e) => setEditingText(e.target.value)}
          />
        ) : (
          <div>{todo.text}</div>
        )}
      </div>
      <div className="todo-actions">
        {isEditing ? (
          <>
            <button onClick={handleSubmitEdit}>Save &#10003;</button>
            <button onClick={handleCancelEdit}>Cancel</button>
          </>
        ) : (
          <>
            <button onClick={handleEdit}>Edit</button>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </>
        )}
      </div>
    </div>
  );
};

export default TodoItem;
