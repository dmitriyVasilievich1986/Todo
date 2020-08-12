import { USER_LOADING, ERROR_MESSAGE, USER_LOADED, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS, REGISTER_SUCCESS, REGISTER_FAIL } from './types'
import axios from 'axios'

export const loadUser = () => (dispatch, getState) => {
    dispatch({ type: USER_LOADING })
    axios.get('/api/auth/user', tokenConfig(getState))
        .then(res => {
            dispatch({
                type: USER_LOADED,
                payload: res.data
            })
        }).catch(err => {
            console.log(err)
            dispatch({
                type: AUTH_ERROR
            })
        })
}

export const login = (username, password) => dispatch => {
    const config = {
        headers: { "Content-Type": "application/json" }
    }
    const body = JSON.stringify({ username, password })
    axios.post('/api/auth/login', body, config)
        .then(res => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            })
        }).catch(err => {
            if (err.response.data) alert("Введены неверные данные")
            dispatch({
                type: LOGIN_FAIL
            })
        })
}

export const logout = () => (dispatch, getState) => {
    axios.post('/api/auth/logout/', null, tokenConfig(getState))
        .then(res => {
            dispatch({
                type: LOGOUT_SUCCESS
            })
        }).catch(err => {
            console.log(err)
        })
}

export const tokenConfig = getState => {
    const token = getState().auth.token
    const config = {
        headers: { "Content-Type": "application/json" }
    }
    if (token) {
        config.headers['Authorization'] = `Token ${token}`
    }
    return config
}

export const register = ({ username, password, email }) => dispatch => {
    const config = {
        headers: { "Content-Type": "application/json" }
    }
    const body = JSON.stringify({ username, email, password })
    axios.post('/api/auth/register', body, config)
        .then(res => {
            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data
            })
        }).catch(err => {
            dispatch({
                type: ERROR_MESSAGE,
                payload: err.response.data
            })
            dispatch({
                type: REGISTER_FAIL
            })
        })
}