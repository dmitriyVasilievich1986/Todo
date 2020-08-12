import { combineReducers } from 'redux'
import TodoReducer from './TodoReducer'
import auth from './auth'

export default combineReducers({
    todos: TodoReducer,
    auth
})