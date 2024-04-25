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
                <Dropdown title="Description" text="Boop"/>
                <Dropdown title="Équipements" text="Secret"/>
            </section>
        </main>
    )
}

export default FicheLogement