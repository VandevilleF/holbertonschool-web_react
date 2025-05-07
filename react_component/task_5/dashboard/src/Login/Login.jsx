import './Login.css'
import React from 'react'
import WithLogging from '../HOC/WithLogging'

class Login extends React.Component {
    render() {
        return (
        <div className="App-body">
            <p>Login to access the full dashboard</p>
            <label htmlFor="email">Email:
                <input id="email" type="email" />
            </label>
            <label htmlFor="password">Password:
                <input id="password" type="password" />
            </label>
            <button>OK</button>
        </div>
        )
    }
}

const LoginWithLogging = WithLogging(Login);
export default LoginWithLogging;
