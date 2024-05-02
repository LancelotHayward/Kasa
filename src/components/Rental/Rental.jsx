import "./Rental.scss"
import { Link } from 'react-router-dom'

function Rental({id, title, background}) {
    const link = "/logement/" + id
    return (
        <Link to={link} className="rental">
            <p>{title}</p>
            <img src={background} alt={title}/>
        </Link>
    )
}
export default Rental