import "./Host.scss"

function Host({name, picture}) {
    return (
        <div id="host">
            <p>{name}</p>
            <img src={picture} alt={name}/>
        </div>
    )
}

export default Host