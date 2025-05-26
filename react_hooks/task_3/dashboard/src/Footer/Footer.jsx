import { getCurrentYear, getFooterCopy } from '../utils/utils';
import { StyleSheet, css } from 'aphrodite';
import NewContext from '../Context/context';

export default function Footer() {
    return (
        <NewContext.Consumer>
            {({ user }) => (
                <div className={css(styles.footer)}>
                    <p>Copyright { getCurrentYear() } - { getFooterCopy(true) }</p>
                    {user?.isLoggedIn && ( //Vérification conditionnelle avec ?. et && rendu conditionnel
                        <p><a href='#'>Contact us</a></p>
                    )}
                </div>
            )}
        </NewContext.Consumer>
    )
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
