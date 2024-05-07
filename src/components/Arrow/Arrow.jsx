import { useRef, useEffect } from 'react';
import "./Arrow.scss"

function Arrow({side, photo, setPhoto, showPicture}) {
    const arrowRef = useRef(null)
    useEffect(() => {
        arrowRef.current.addEventListener('click', handleClick)
    }, [])
    // biome-ignore lint/correctness/noUnusedVariables: event is vital to functionality
    const handleClick = (event) => {
        if (side === "right") {
            setPhoto(photo + 1)
        }
        showPicture(photo)
    }
    let alt = "précédent"
    if (side === "right") {
        alt = "suivant"
    }
    return (
        <img id={side} class="arrow" src="../gallery-arrow.png" alt={"Image " + alt} ref={arrowRef}/>
    )
}

export default Arrow