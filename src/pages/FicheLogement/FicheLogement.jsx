import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import rentals from "../../data/logements.js"
import "./FicheLogement.scss"
import Tags from "../../components/Tags/Tags.jsx"
import Host from "../../components/Host/Host.jsx"
import Stars from "../../components/Stars/Stars.jsx"
import Dropdown from "../../components/Dropdown/Dropdown.jsx"

function FicheLogement() {
    const params = useParams()
    const navigate = useNavigate()
    if (!rentals.some(rental => rental.id === params.id)) {
        return navigate("/error")
    }
    const rental = rentals.find(rental => rental.id === params.id)

    return (
        <main>
            <img src={rental.pictures[0]} alt={rental.title}/>
            <section>
                <div>
                    <h1>{rental.title}</h1>
                    <p>{rental.location}</p>
                    <Tags list={rental.tags}/>
                </div>
                <div>
                    <Host name={rental.host.name} picture={rental.host.picture}/>
                    <Stars rating={rental.rating}/>
                </div>
            </section>
            <section>
                <Dropdown title="Description" text={rental.description}/>
                <Dropdown title="Équipements" text={rental.equipments}/>
            </section>
        </main>
    )
}

export default FicheLogement