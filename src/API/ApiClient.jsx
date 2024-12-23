import axios from 'axios';

// http://localhost:8080/todo/users/Akshit/todoList

export const apiClient = axios.create(
    {
        baseURL : 'http://localhost:8080/'
    }
);