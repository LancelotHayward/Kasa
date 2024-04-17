import { Link } from 'react-router-dom'
import "./Error.css"

function Error() {
    return (
        <main>
            <p>404</p>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/">Retourner sur la page d’accueil</Link>
        </main>
    )
}

export default Error