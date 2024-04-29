import "./Gallery.scss"
import Rental from "../Rental/Rental.jsx";
import rentals from "../../data/logements.js"

function Gallery() {
    return (
        <section id="Gallery">
            {rentals.map(rental => {
                return (<Rental id={rental.id} title={rental.title} background={rental.cover}/>)
            })}
        </section>
    )
}
export default Gallery