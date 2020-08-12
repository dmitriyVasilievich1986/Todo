import React, { Component, Fragment } from 'react'
import TodoForm from './layers/TodoForm'
import TodoList from './layers/TodoList'

class Dashboard extends Component {
    render() {
        return (
            <Fragment>
                <div className="p-3">
                    <TodoForm />
                </div>
                <hr />
                <div className="row text-center">
                    <div className="col">
                        <h1>Мой список дел</h1>
                    </div>
                </div>
                <div className="container-fluid p-3">
                    <TodoList />
                </div>
            </Fragment>

        )
    }
}

export default Dashboard