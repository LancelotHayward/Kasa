import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import rentals from "../../data/logements.js"
import "./FicheLogement.scss"
import Tags from "../../components/Tags/Tags.jsx"
import Host from "../../components/Host/Host.jsx"
import Stars from "../../components/Stars/Stars.jsx"
import Collapse from "../../components/Collapse/Collapse.jsx"

function FicheLogement() {
    const params = useParams()
    const navigate = useNavigate()
    if (!rentals.some(rental => rental.id === params.id)) {
        return navigate("/error")
    }
    const rental = rentals.find(rental => rental.id === params.id)

    return (
        <main id="fichelogement">
            <img src={rental.pictures[0]} alt={rental.title}/>
            <section id="meta">
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
            <section id="dropdowns">
                <Collapse title="Description" text={rental.description}/>
                <Collapse title="Équipements" text={rental.equipments}/>
            </section>
        </main>
    )
}

export default FicheLogement