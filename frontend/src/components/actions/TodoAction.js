import { GET_TODO, UPDATE_TODO, DELETE_TODO, ADD_TODO } from './types'
import axios from 'axios'
import { tokenConfig } from './auth'

export const getTodos = () => (dispatch, getState) => {
    axios.get('api/todos/', tokenConfig(getState))
        .then(todo => dispatch({
            type: GET_TODO,
            payload: todo.data
        }))
        .catch(err => console.log(err))
}

export const updateTodo = (newTodo) => (dispatch, getState) => {
    axios.put(`api/todos/${newTodo.id}/`, newTodo, tokenConfig(getState))
        .then(todo => dispatch({
            type: UPDATE_TODO,
            payload: todo.data
        }))
        .catch(err => console.log(err))
}

export const addTodo = (newTodo) => (dispatch, getState) => {
    axios.post(`api/todos/`, newTodo, tokenConfig(getState))
        .then(todo => dispatch({
            type: ADD_TODO,
            payload: todo.data
        }))
        .catch(err => console.log(err))
}

export const deleteTodo = (delTodo) => (dispatch, getState) => {
    axios.delete(`api/todos/${delTodo.id}/`, tokenConfig(getState))
        .then(todo => dispatch({
            type: DELETE_TODO,
            payload: delTodo
        }))
        .catch(err => console.log(err))
}