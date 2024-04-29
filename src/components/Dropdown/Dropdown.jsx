import React, { useRef, useEffect } from 'react';
import "./Dropdown.scss"

function Dropdown({title, text}) {
    const dropdown = useRef(null)
    useEffect(() => {
        dropdown.current.addEventListener('click', openDialog)
    }, [])

    // biome-ignore lint/correctness/noUnusedVariables: event is vital to functionality
    const openDialog = (event) => {
        document.getElementById(title).classList.toggle("open")
    }

    return (
        <article className="dropdown" ref={dropdown}>
            <div>
                <h2>{title}</h2>
                <img src="dropdown-arrow.png" alt="Lire plus..."/>
            </div>
            <p id={title}>{text}</p>
        </article>
    )
}

export default Dropdown