import { StyleSheet, css } from 'aphrodite';
import WithLogging from '../../components/HOC/WithLogging';
import useLogin from '../../hooks/useLogin';

const styles = StyleSheet.create({
  body: {
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
  input: {
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
});

function Login({ login }) {
  const {
    email,
    password,
    enableSubmit,
    handleChangeEmail,
    handleChangePassword,
    handleLoginSubmit,
  } = useLogin({ onLogin: login });

  return (
    <form aria-label="form" onSubmit={handleLoginSubmit}>
      <div className={css(styles.body)}>
        <p className={css(styles.paragraph)}>Login to access the full dashboard</p>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={handleChangeEmail}
            className={css(styles.input)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={handleChangePassword}
            className={css(styles.input)}
          />
          <input
            type="submit"
            value="OK"
            disabled={!enableSubmit}
            className={css(styles.button)}
          />
        </div>
      </div>
    </form>
  );
}

export default WithLogging(Login);
