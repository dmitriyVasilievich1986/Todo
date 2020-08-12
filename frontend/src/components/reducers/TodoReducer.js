import { GET_TODO, UPDATE_TODO, DELETE_TODO, ADD_TODO } from '../actions/types'

const initalState = {
    todos: [],
    todo: {}
}

export default function (state = initalState, action) {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => todo !== action.payload)
            }
        case UPDATE_TODO:
            return {
                ...state,
                todos: state.todos.map(todo => todo.id === action.payload.id ? action.payload : todo)
            }
        case GET_TODO:
            return {
                ...state,
                todos: action.payload
            }
        default:
            return state
    }
}