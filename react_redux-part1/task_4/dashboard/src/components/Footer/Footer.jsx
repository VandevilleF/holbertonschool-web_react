import { StyleSheet, css } from 'aphrodite';
import { getCurrentYear, getFooterCopy } from '../../utils/utils';
import { useSelector } from 'react-redux';

export default function Footer() {
  const { isLoggedIn, user } = useSelector((state) => state.auth);
  return (
    <div
    // className={css(styles.footer)}
    >
      <p>Copyright {getCurrentYear()} - {getFooterCopy(true)}</p>
      {isLoggedIn && <a href="#">Contact us</a>}
    </div>
  );
}

const styles = StyleSheet.create({
    footer: {
    display: 'flex',
    justifyContent: 'center',
    padding: '0.5rem',
    borderTopStyle: 'solid',
    borderColor: '#e1003c',
  },
})
