const CareerItem = ({  }) => {
    return (
        <div>
            <h2 id={tag}>{title}</h2>
            {items.map(item => (
                <h3>{item.title}</h3>
            ))}
        </div>
    )
}

export default CareerItem;