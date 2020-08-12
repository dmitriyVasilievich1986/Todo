import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateTodo, deleteTodo } from '../actions/TodoAction'

class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            complited: "list-group-item p-3 d-flex justify-content-between align-items-center list-group-item-success",
            notCompleted: "list-group-item p-3 d-flex justify-content-between align-items-center",
        }
        this.changeHandler = this.changeHandler.bind(this)
        this.clickHandler = this.clickHandler.bind(this)
    }
    clickHandler(e) {
        this.props.deleteTodo(this.props.todo)
    }
    changeHandler(e) {
        const newColor = this.props.todo.completed === false ? true : false
        const newTodo = {
            "id": this.props.todo.id,
            "text": this.props.todo.text,
            "completed": newColor
        }
        this.props.updateTodo(newTodo)
    }
    render() {
        return (
            <li key={this.props.todo.id} className={this.props.todo.completed === false ? this.state.notCompleted : this.state.complited}>
                <h2>{this.props.todo.text}</h2>
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button
                        onClick={this.changeHandler}
                        type="button"
                        className="btn btn-primary btn-sm">
                        {this.props.todo.completed === false ? "Завершить" : "Отменить"}</button>
                    <button
                        onClick={this.clickHandler}
                        type="button"
                        className="btn btn-danger btn-sm">
                        Удалить</button>
                </div>
            </li>
        )
    }
}

export default connect(null, { updateTodo, deleteTodo })(Todo)