import React from "react";
import "./App.css";
const App = () => {
    const [todos, setTodos] = React.useState([]);
    const [todo, setTodo] = React.useState("");
    const [todoEditing, setTodoEditing] = React.useState(null);
    const [editingText, setEditingText] = React.useState("");

    // Add the handlesubmit code here
    const handleSubmit = (e) => {
        e.preventDefault();

        const newTodo = {
            id: new Date().getTime(),
            text: todo.trim(),
            completed: false,
        }

        if (newTodo.text.length > 3) {
            setTodos([...todos, newTodo]);
            setTodo("");
        } else {
            alert("Enter valid Task");
            setTodo("");
        }

    }

    // Add the deleteToDo code here
    const deleteToDo = (id) => {
        let updatedTodos = [...todos].filter((todo) => todo.id != id);
        setTodos(updatedTodos);
    }

    // Add the toggleComplete code here
    const toggleComplete = (id) => {
        let updatatedTodos = [...todos].map((todo) => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        });
        setTodos(updatatedTodos);
    }

    // Add the submitEdits code here
    const submitEdits = (id) => {
        const updatedTodos = [...todos].map((todo) => {
            if (todo.id === id) {
                todo.text = editingText;
            }
            return todo;
        })
        setTodos(updatedTodos);
        setTodoEditing(null);
    }

    return (
        <div id="todo-list">
            <h1>Todo List</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={(e) => setTodo(e.target.value)} placeholder="Add new Task" value={todo} />
                <button type="submit">Add Todo</button>
            </form>
            {todos.map((todo) => (<div className="todo" key={todo.id}>
                <div className="todo-text">
                    <input type="checkbox" id="completed" checked={todo.completed} onChange={() => toggleComplete(todo.id)} />
                    {todo.id === todoEditing ? <input type="text" onChange={(e) => e.target.value} /> : <div>{todo.text}</div>}
                </div>
                <div className="todo-actions">
                    {todo.id === todoEditing ? <button onClick={() => submitEdits(todo.id)}>Submit Edits</button> : <button onClick={() => setTodoEditing(todo.id)}>Edit</button>}
                    <button onClick={() => deleteToDo(todo.id)}>Delete</button>
                </div>
            </div>))}
        </div>
    );
};
export default App;
