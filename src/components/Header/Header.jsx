import "./Header.scss"
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header>
            <img src="kasa-logo.png" alt="Kasa"/>
            <nav>
                <Link to="/">Accueil</Link>
                <Link to="/about">A Propos</Link>
            </nav>
        </header>
    )
}
export default Header