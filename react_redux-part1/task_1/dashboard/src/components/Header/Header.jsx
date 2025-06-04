import holbertonLogo from '../../assets/holberton-logo.jpg';
import './Header.css'

function Header({ user, logOut }) {
    return (
    <>
    <div className='header-content'>
        <img src={holbertonLogo} className='header-img' alt="holberton logo" />
        <h1 className='header-title'>School dashboard</h1>
    </div>
    {user.isLoggedIn && (
        <section id='logoutSection'>
            Welcome {user.email} (
                <a href='#' onClick={logOut}><i>logout</i></a>
            )
        </section>
    )}
    </>
    )
}

export default Header
