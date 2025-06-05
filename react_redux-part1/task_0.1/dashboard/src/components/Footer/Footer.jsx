import { getCurrentYear, getFooterCopy } from '../../utils/utils';
import './Footer.css'

export default function Footer({ user }) {
    return (
    <div className='footer-content'>
        <p>Copyright { getCurrentYear() } - { getFooterCopy(true) }</p>
        {user?.isLoggedIn && ( //Vérification conditionnelle avec ?. et && rendu conditionnel
            <p><a href='#'>Contact us</a></p>
        )}
    </div>
    )
}
