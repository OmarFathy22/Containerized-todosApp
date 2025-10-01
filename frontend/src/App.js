import './App.css';
import React, { useEffect, useState } from 'react';
import {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo
} from './api/api';

function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState('');

  const fetchTodos = async () => {
    try {
      const resp = await getTodos();
      setTodos(resp.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleAdd = async () => {
    if (!title.trim()) return;
    const resp = await createTodo({ title, is_done: false });
    setTodos([...todos, resp.data]);
    setTitle('');
  };

  const toggleDone = async (todo) => {
    const resp = await updateTodo(todo.id, {
      title: todo.title,
      is_done: !todo.is_done
    });
    setTodos(todos.map(t => (t.id === todo.id ? resp.data : t)));
  };

  const handleDelete = async (id) => {
    await deleteTodo(id);
    setTodos(todos.filter(t => t.id !== id));
  };

  return (
    <div className="app-container">
      <h1>📝 Todo List</h1>

      <div className="input-group">
        <input
          type="text"
          placeholder="Enter a task..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button onClick={handleAdd}>Add</button>
      </div>

      <ul className="todo-list">
        {todos.map(todo => (
          <li
            key={todo.id}
            className={`todo-item ${todo.is_done ? 'completed' : ''}`}
          >
            <span
              className="todo-title"
              onClick={() => toggleDone(todo)}
            >
              {todo.title}
            </span>
            <button
              className="delete-btn"
              onClick={() => handleDelete(todo.id)}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
