import "./Rental.scss"
import { Link } from 'react-router-dom'

function Rental({link, title, background}) {
    return (
        <article className="rental">
            <Link to={link}>{title}</Link>
            <img src={background} alt={title}/>
        </article>
    )
}
export default Rental