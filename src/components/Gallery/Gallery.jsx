import { useState } from 'react'
import "./Gallery.scss"

function Gallery({pictures, alt}) {
    const [photo, setPhoto] = useState(0);
    function showPreviousPicture() {
        if (photo === 0) {
            setPhoto(pictures.length - 1)
            return
        }
        setPhoto(photo - 1)
    }
    function showNextPicture() {
        if (photo === pictures.length - 1) {
            setPhoto(0)
            return
        }
        setPhoto(photo + 1)
    }
    return (
        <section id="Gallery">
            <img id="left" className="arrow" src="../gallery-arrow.png" alt="Précédent" onClick={showPreviousPicture}/>
            {pictures.map(function(picture, i){
                let class_names = "picture"
                if (i === photo) {
                    class_names += " visible"
                }
                return (
                    <img key={i} src={picture} alt={alt} id={"rental-" + i} className={class_names}/>
                )
            })}
            <div id="index">{photo + 1}/{pictures.length}</div>
            <img id="right" className="arrow" src="../gallery-arrow.png" alt="Suivant" onClick={showNextPicture}/>
        </section>
    )
}
export default Gallery