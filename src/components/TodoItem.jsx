import React from 'react'
import { useState } from "react";

const TodoItem = ({ todo, toggleComplete, deleteTodo, startEditing, todoEditing }) => {
    const [editingText, setEditingText] = useState("");

    const submitEdits = () => {
        submitEdits(todo.id, editingText); 
        setEditingText("");
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
                {todo.id === todoEditing ? (
                    <input
                        type="text"
                        onChange={(e) => setEditingText(e.target.value)}
                        value={editingText}
                    />
                ) : (
                    <div>{todo.text}</div>
                )}
            </div>
            <div className="todo-actions">
                {todo.id === todoEditing ? (
                    <button onClick={submitEdits}>Submit Edits</button>
                ) : (
                    <button onClick={() => startEditing(todo.id, todo)}>Edit</button>
                )}
                <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            </div>
        </div>
    );
};

export default TodoItem;