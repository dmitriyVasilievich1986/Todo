import React, { Component } from 'react'
import { getTodos } from '../actions/TodoAction'
import { connect } from 'react-redux'
import Todo from './Todo'

class TodoList extends Component {
    componentWillMount() {
        this.props.getTodos()
    }
    render() {
        return (
            <ul className="list-group list-group-flush">
                {this.props.todos.map(todo => (
                    <Todo todo={todo} key={todo.id} />
                ))}
            </ul>
        )
    }
}

const mapStateToProps = state => ({
    todos: state.todos.todos
})

export default connect(mapStateToProps, { getTodos })(TodoList)