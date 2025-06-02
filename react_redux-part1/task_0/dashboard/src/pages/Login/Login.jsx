import WithLogging from '../../components/HOC/WithLogging'
import useLogin from '../../hooks/useLogin';
import './Login.css'

function Login( { logIn } ) {
    const { email, password, enableSubmit, handleChange, handleSubmit } = useLogin(logIn);

    return (
    <div className='login_form'>
        <p>Login to access the full dashboard</p>
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email:
                <input className='input'
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={handleChange} />
            </label>
            <label htmlFor="password">Password:
                <input className='input'
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={handleChange} />
            </label>
            <input className='button'
            type='submit'
            value='OK'
            disabled={!enableSubmit}/>
        </form>
    </div>
    )
}

const LoginWithLogging = WithLogging(Login);
export default LoginWithLogging;
