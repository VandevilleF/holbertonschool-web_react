import { StyleSheet, css } from 'aphrodite';
import logo from '../../assets/holberton-logo.jpg';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../features/auth/authSlice';

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

export default function Header() {
  const dispatch = useDispatch();
  const { isLoggedIn, user } = useSelector((state) => state.auth);

  const handleLogout = (event) => {
    event.preventDefault();
    dispatch(logout());
  };
  return (
    <div className={css(styles.header)}>
      <img src={logo} className={css(styles.logo)} alt="holberton logo" />
      <h1 className={css(styles.title)}>School Dashboard</h1>
      {isLoggedIn && (
        <div className={css(styles.logoutSection)} id="logoutSection">
          Welcome <b>{user.email}</b>{' '}
          <a href="#" onClick={handleLogout}>
            (logout)
          </a>
        </div>
      )}
    </div>
  );
}
