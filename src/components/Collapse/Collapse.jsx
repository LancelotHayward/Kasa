import React, { useRef, useEffect } from 'react';
import "./Collapse.scss"

function Collapse({title, text}) {
    //Event listener to open and close
        const dropdown = useRef(null)
        useEffect(() => {
            dropdown.current.addEventListener('click', openDialog)
        }, [])

        // biome-ignore lint/correctness/noUnusedVariables: event is vital to functionality
        const openDialog = (event) => {
            document.getElementById(title).classList.toggle("open")
        }
    //Convert text to array if needed
        if (text instanceof Array === false) {
            text = [text]
        }
    //Component
    return (
        <article className="dropdown" ref={dropdown}>
            <div>
                <h2>{title}</h2>
                <img src="../dropdown-arrow.png" alt="Lire plus..."/>
            </div>
            <ul id={title}>{
                text.map(item => {
                    return (<li>{item}</li>)
                })
            }</ul>
        </article>
    )
}

export default Collapse