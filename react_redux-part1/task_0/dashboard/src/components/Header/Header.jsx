import { StyleSheet, css } from 'aphrodite';
import logo from '../../assets/holberton-logo.jpg';

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    alignItems: 'center',
    padding: '1rem',
    borderBottomStyle: 'solid',
    borderColor: '#e1003c',
  },
  title: {
    display: 'flex',
    fontWeight: 'bold',
    color: '#e1003c',
  },
  logo: {
    display: 'flex',
    width: '150px'
  },
  logoutSection: {
    marginLeft: 'auto',
    fontSize: '1rem',
  },
});

export default function Header({ user, logOut }) {
  return (
    <div className={css(styles.header)}>
      <img src={logo} className={css(styles.logo)} alt="holberton logo" />
      <h1 className={css(styles.title)}>School Dashboard</h1>
      {user.isLoggedIn && (
        <div className={css(styles.logoutSection)} id="logoutSection">
          Welcome <b>{user.email}</b>{' '}
          <a href="#" onClick={logOut}>
            (logout)
          </a>
        </div>
      )}
    </div>
  );
}
