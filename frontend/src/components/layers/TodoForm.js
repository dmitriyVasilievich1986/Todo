import React, { Component } from 'react'
import { addTodo } from '../actions/TodoAction'
import { connect } from 'react-redux'

class TodoForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: ''
        }
        this.onClick = this.onClick.bind(this)
        this.onChange = this.onChange.bind(this)
    }
    onClick(e) {
        const newTodo = {
            text: this.state.text,
            completed: false
        }
        e.preventDefault()
        this.setState({
            text: ''
        })
        this.props.addTodo(newTodo)
    }
    onChange(e) {
        this.setState({
            text: e.target.value
        })
    }
    render() {
        return (
            <form>
                <div className="form-group">
                    <label>Новая задача</label>
                    <input value={this.state.text} onChange={this.onChange} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <button onClick={this.onClick} type="submit" className="btn btn-primary">Добавить</button>
            </form>
        )
    }
}

const mapStateToProps = state => ({
    todos: state.todos.todos
})

export default connect(mapStateToProps, { addTodo })(TodoForm)