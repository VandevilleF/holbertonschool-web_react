import WithLogging from '../HOC/WithLogging'
import { StyleSheet, css } from 'aphrodite';
import { useState } from 'react';

function Login( { logIn } ) {
    const [enableSubmit, setEnableSubmit] = useState(false);
    const [formData, setFormData] = useState({ email: '', password: '' });

    const validateForm = (email, password) => {
        const isValidEmail = /\S+@\S+\.\S+/.test(email);
        const isValidPassword = password.length >= 8;
        return email !== '' && password !== '' && isValidEmail && isValidPassword;
    };

    const handleLoginSubmit = (event) => {
        event.preventDefault();
        logIn(formData.email, formData.password);
    }

    const handleChangeEmail = (event) => {
        const email = event.target.value;
        const password = formData.password;
        const isValid = validateForm(email, password);
        setFormData({ ...formData, email });
        setEnableSubmit(isValid);
  };

    const handleChangePassword = (event) => {
        const password = event.target.value;
        const email = formData.email;
        const isValid = validateForm(email, password);
        setFormData({ ...formData, password });
        setEnableSubmit(isValid);
  };



    return (
    <div className={css(styles.bodystyle)}>
        <p>Login to access the full dashboard</p>
        <form onSubmit={handleLoginSubmit}>
            <label htmlFor="email">Email:
                <input className={css(styles.bodyinput)}
                id="email"
                type="email"
                value={formData.email}
                onChange={handleChangeEmail} />
            </label>
            <label htmlFor="password">Password:
                <input className={css(styles.bodyinput)}
                id="password"
                type="password"
                value={formData.password}
                onChange={handleChangePassword} />
            </label>
            <input className={styles.button}
            type='submit'
            value='OK'
            disabled={!enableSubmit}/>
        </form>
    </div>
    )
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
