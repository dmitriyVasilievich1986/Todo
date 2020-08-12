import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { register } from '../actions/auth'

class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            email: '',
            password: '',
            password2: '',
            passwordError: ''
        }
        this.onSubmit = this.onSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
    }
    onSubmit(e) {
        e.preventDefault()
        const { username, email, password, password2 } = this.state
        if (password !== password2) {
            this.setState({
                passwordError: "Введенные пароли не совпадают."
            })
        } else {
            const newUser = {
                username, password, email
            }
            this.props.register(newUser)
        }
    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    render() {
        if (this.props.isAuthenticated) {
            return <Redirect to="/" />
        }
        const { username, email, password, password2 } = this.state
        return (
            <div className="col-md-6 m-auto">
                <div className="card card-body mt-5">
                    <h2 className="text-center">Регистрация пользователя</h2>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Имя пользователя</label>
                            <input type="text" className="form-control" name="username" onChange={this.onChange} value={username} />
                            <small
                                className="form-text text-danger">
                                {this.props.errorText.username &&
                                    this.props.errorText.username[0] === "This field may not be blank." ?
                                    "Это поле обязательно для заполнения." : ""}
                            </small>
                            <small
                                className="form-text text-danger">
                                {this.props.errorText.username &&
                                    this.props.errorText.username[0] === "A user with that username already exists." ?
                                    "Данное имя уже занято." : ""}
                            </small>
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" className="form-control" name="email" onChange={this.onChange} value={email} />
                        </div>
                        <div className="form-group">
                            <label>Пароль</label>
                            <input type="password" className="form-control" name="password" onChange={this.onChange} value={password} />
                            <small
                                className="form-text text-danger">
                                {this.props.errorText.password &&
                                    this.props.errorText.password[0] === "This field may not be blank." ?
                                    "Это поле обязательно для заполнения." : ""}
                            </small>
                        </div>
                        <div className="form-group">
                            <label>Подтвердите пароль</label>
                            <input type="password" className="form-control" name="password2" onChange={this.onChange} value={password2} />
                            <small
                                className="form-text text-danger">{this.state.passwordError}</small>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary">Зарегистрироваться</button>
                        </div>

                        <p>
                            Уже есть учетная запись? <Link to="/login">Вход</Link>
                        </p>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    errorText: state.auth.errorText
})

export default connect(mapStateToProps, { register })(Register)