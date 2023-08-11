const Chapter = ({ title, items, id }) => {
    return (
        <div>
            <h1 id={id}>{title}</h1>
            {items.map(item => (
                <h3>{item.title}</h3>
            ))}
        </div>
    )
}

export default Chapter;