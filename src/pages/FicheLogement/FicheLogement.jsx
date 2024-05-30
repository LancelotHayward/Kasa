import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import { useEffect } from 'react';

import data_rentals from "../../data/logements.js"
import "./FicheLogement.scss"

import Gallery from "../../components/Gallery/Gallery.jsx";
import Tags from "../../components/Tags/Tags.jsx"
import Host from "../../components/Host/Host.jsx"
import Stars from "../../components/Stars/Stars.jsx"
import Collapse from "../../components/Collapse/Collapse.jsx"
import Error404 from "../../pages/Error404/Error404.jsx"

function FicheLogement() {
    const params = useParams()
    const rental = data_rentals.find(rental => rental.id === params.id)
    useEffect(() => {
        document.title = 'Kasa Logement'
      }, [])

      if (!rental) {
        return <Error404/>
    }
    return (
        <main id="fichelogement">
            <Gallery pictures={rental.pictures} alt={rental.title}/>
            <section id="meta">
                <div>
                    <h1>{rental.title}</h1>
                    <p id="location">{rental.location}</p>
                    <Tags list={rental.tags}/>
                </div>
                <div id="hostrating">
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