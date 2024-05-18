import { useEffect } from 'react'

import data_rentals from "../../data/logements.js"
import "./Home.scss"

import Hero from "../../components/Hero/Hero.jsx"
import Rental from "../../components/Rental/Rental.jsx"

function Home() {
    useEffect(() => {
        document.title = "Kasa"
      }, [])

    return (
        <main>
            <Hero/>
            <section id="rentals">
                {data_rentals.map(rental => {
                    return (<Rental key={rental.id} id={rental.id} title={rental.title} background={rental.cover}/>)
                })}
            </section>
        </main>
    )
}

export default Home