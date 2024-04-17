import "./KasaHeader.css"
import { Link } from 'react-router-dom'

function KasaHeader() {
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
export default KasaHeader