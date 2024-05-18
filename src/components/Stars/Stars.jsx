import "./Stars.scss"

function Stars({rating}) {
    //Create array from rating
    const stars = []
    for (let i=0; i < 5; i++ ) {
        if (i < rating) {
            stars.push("../star-full.png")
            continue
        }
        stars.push("../star-empty.png")
    }
    //Component
    return (
        <div id="rating">
            {stars.map(function(star,i) {
                return (<img key={i} className="star" alt={rating + " stars"} src={star}/>)
            })}
        </div>
    )
}

export default Stars