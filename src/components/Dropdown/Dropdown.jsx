import "./Dropdown.scss"

function Dropdown({title, text}) {
    return (
        <article class="dropdown">
            <h2>{title}</h2>
            <p>{text}</p>
        </article>
    )
}

export default Dropdown