import { useState } from 'react';
import "./Gallery.scss"

function Gallery({pictures, alt}) {
    const [photo, setPhoto] = useState(0);
    function showPicture(id) {
        const images = document.getElementsByClassName("picture")
        images.forEach(image => {
            // if (image.classList.contains("visible")) {
                image.classList.remove("visible")
            // }
        })
        document.getElementById("rental-" + id).classList.add("visible")
    }
    return (
        <section id="Gallery">
            {pictures.map(function(picture, i){
                let class_names = "picture"
                if (i === 0) {
                    class_names += " visible"
                }
                return (
                    <img src={picture} alt={alt} id={"rental-" + i} className={class_names}/>
                )
            })}
            <div id="controls">1/4</div>
        </section>
    )
}
export default Gallery