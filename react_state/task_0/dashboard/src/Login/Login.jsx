import React from 'react'
import WithLogging from '../HOC/WithLogging'
import { StyleSheet, css } from 'aphrodite';

class Login extends React.Component {
    render() {
        return (
        <div className={css(styles.bodystyle)}>
            <p>Login to access the full dashboard</p>
            <label htmlFor="email">Email
                <input className={css(styles.bodyinput)} id="email" type="email" />
            </label>
            <label htmlFor="password">Password
                <input className={css(styles.bodyinput)} id="password" type="password" />
            </label>
            <button className={styles.button}>OK</button>
        </div>
        )
    }
}

const styles = StyleSheet.create({
    bodystyle: {
        display: 'block',
        justifyContent: 'flex-start',
        padding: '0.5rem',
        flex: '1',
        '@media (max-width: 900px)': {
            display:' flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
        },
    },
    bodyinput: {
        margin: '0 0.5rem 0',
        '@media (max-width: 900px)': {
            border: 'none',
            outline: 'none',
        }
    },
    button: {
        marginTop: '1rem',
        display: 'inline-block',
        width: 'auto',
        '@media (max-width: 900px)': {
            width: 'fit-content',
        },
    },
})

const LoginWithLogging = WithLogging(Login);
export default LoginWithLogging;
