import "./Stars.scss"

function Stars({rating}) {
    //Create array from rating
    const stars = []
    for (let i=0; i < 5; i++ ) {
        if (i < rating) {
            stars.push("full")
            continue
        }
        stars.push("empty")
    }
    //Component
    return (
        <div id="rating">
            {stars.map(star => {
                return (<div class={star}></div>)
            })}
        </div>
    )
}

export default Stars