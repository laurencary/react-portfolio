const CareerItem = ({ item }) => {
    const endTimeFrame = item.endDate ? `- ${item.endDate}` : ' to present'

    return (
        <div className="career-item">
            <h3>{item.title}</h3>
            <h3>{item.company}</h3>
            <p>{`${item.startDate}${endTimeFrame}`}</p>
            <ul>
                {item.responsibilities.map((res) => (
                    <li key={res.slice(0,20)}>{res}</li>
                ))}
            </ul>
        </div>
    )
}

export default CareerItem;


