import { Link } from 'react-router-dom'
import { useEffect } from 'react';
import "./Error404.scss"

function Error404() {
    useEffect(() => {
        document.title = 'Kasa: 404'
      }, [])
    return (
        <main id='Error404'>
            <p>404</p>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/">Retourner sur la page d’accueil</Link>
        </main>
    )
}

export default Error404