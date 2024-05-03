import { useRef, useEffect } from 'react';
import "./Arrow.scss"

function Arrow() {
    function handleClick(side) {
        if (side == "right") {
            setPhoto(photo + 1)
            showPicture(photo)
        }
    }
    return (
        
    )
}