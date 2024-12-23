import {apiClient} from './ApiClient'

// http://localhost:8080/todo/users/Akshit/todoList


// Get Data

export const TodoData = () => apiClient.get('todo/users/Akshit/todoList');

// Get Data By passing USERNAME as Path Variable

export const getTodoDataForusername = (username) => apiClient.get(`todo/users/${username}/todoList`);

// To Get All Data

export const getTodoData = () => apiClient.get('todo/users/todoList');

// To Delete Data

export const DeleteTodoDataAPI = (id) => apiClient.delete(`todo/users/todoList/${id}`);

// For Updating Data

export const getTodoDataWithId = (id) => apiClient.get(`todo/users/todoList/${id}`);

export const updateTodoDataWithId = (id, todo) => apiClient.put(`todo/users/todoList/${id}`, todo);

// Add Todo

export const createTodoDataAPI = (todo) => apiClient.post(`todo/addTodos`, todo);

