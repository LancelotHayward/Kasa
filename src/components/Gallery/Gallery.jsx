import { useState } from 'react';
import "./Gallery.scss"

import Arrow from "../Arrow/Arrow.jsx"

function Gallery({pictures, alt}) {
    const [photo, setPhoto] = useState(0);
    function showPicture(id) {
        const images = document.getElementsByClassName("picture")
        for (let i = 0; i < images.length; i++){
                images[i].classList.remove("visible")
        }
        document.getElementById("rental-" + id).classList.add("visible")
    }
    return (
        <section id="Gallery">
            <Arrow side="left" photo={photo} setPhoto={setPhoto} showPicture={showPicture}/>
            {pictures.map(function(picture, i){
                let class_names = "picture"
                if (i === 0) {
                    class_names += " visible"
                }
                return (
                    <img src={picture} alt={alt} id={"rental-" + i} className={class_names}/>
                )
            })}
            <div id="index">{photo + 1}/4</div>
            <Arrow side="right" photo={photo} setPhoto={setPhoto} showPicture={showPicture}/>
        </section>
    )
}
export default Gallery