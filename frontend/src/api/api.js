import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

export const getTodos = () => axios.get(`${API_URL}/api/todos`);
export const createTodo = (data) => axios.post(`${API_URL}/api/todos`, data);
export const updateTodo = (id, data) => axios.put(`${API_URL}/api/todos/${id}`, data);
export const deleteTodo = (id) => axios.delete(`${API_URL}/api/todos/${id}`);
