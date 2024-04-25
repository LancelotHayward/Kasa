import "./FicheLogement.scss"
import Tags from "../../components/Tags/Tags.jsx"
import Stars from "../../components/Stars/Stars.jsx"
import Dropdown from "../../components/Dropdown/Dropdown.jsx"

function FicheLogement() {
    return (
        <main>
            <img src="" alt=""/>
            <section>
                <div>
                    <h1>Titre</h1>
                    <p>Paris</p>
                    <Tags/>
                </div>
                <div>
                    <div>
                        <p>Name</p>
                        <img src="" alt=""/>
                    </div>
                    <Stars/>
                </div>
            </section>
            <section>
                <Dropdown title="Description" text="Vous serez à 50m du canal Saint-martin où vous pourrez pique-niquer l'été et à côté de nombreux bars et restaurants. Au cœur de Paris avec 5 lignes de métro et de nombreux bus. Logement parfait pour les voyageurs en solo et les voyageurs d'affaires. Vous êtes à1 station de la gare de l'est (7 minutes à pied). "/>
                <Dropdown title="Équipements" text="Secret"/>
            </section>
        </main>
    )
}

export default FicheLogement