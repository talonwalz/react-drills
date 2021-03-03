import React, {Component} from 'react';

class Login extends Component {
    constructor() {
        super()
        this.state = {
            username: ``,
            password: ``
        }
        this.alertLogin = this.alertLogin.bind(this)
    }
    handleUsername(val) {
        this.setState({username: val})
    }
    handlePassword(val) {
        this.setState({password: val})
    }
    alertLogin() {
        alert(`Username: ${this.state.username} Password: ${this.state.password}`)
    }

    render() {
        return (
            <div>
            <input onChange={event => this.handleUsername(event.target.value)} placeholder="Username"/>
            <input onChange={event => this.handlePassword(event.target.value)} placeholder="Password"/>
            <button onClick={this.alertLogin}>Login</button>
            </div>
        )
    }
}

export default Login