import "./Tags.scss"

function Tags({list}) {
    return (
        <div className="tags">
            {list.map(tag => {
                return (<p>{tag}</p>)
            })}
        </div>
    )
}

export default Tags