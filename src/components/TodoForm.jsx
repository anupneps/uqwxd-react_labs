import { useState } from "react";
import React from 'react'

const TodoForm = ({ addTodo }) => {
    const [todo, setTodo] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const newTodo = {
            id: new Date().getTime(),
            text: todo.trim(),
            completed: false
        };
        if (newTodo.text.length > 3) {
            addTodo(newTodo);
            setTodo('');
        } else{
            alert("Enter a valid Task !")
            setTodo('');
        }
    }

    return (
       <form onSubmit={handleSubmit}>
        <input type='text' value={todo} onChange={(e) => setTodo (e.target.value)} placeholder='Add new Task' />
        <button type='submit'>Add Task</button>
        </form>
    );
};

export default TodoForm