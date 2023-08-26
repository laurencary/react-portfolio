const CareerItem = ({ item }) => {
    return (
        <div className="career-item">
            <h3>{item.title}</h3>
            <h3>{item.company}</h3>
            <p>{`${item.startDate} - ${item.endDate}`}</p>
            <ul>
                {item.responsibilities.map((res) => (
                    <li>{res}</li>
                ))}
            </ul>
        </div>
    )
}

export default CareerItem;


