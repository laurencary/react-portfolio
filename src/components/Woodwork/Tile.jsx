const Tile = ({project}) => {
    return (
        <article className="style1">
            <span className="image">
                <img src={DiningTable} alt="dining table" />
            </span>
            <div className="tile-text">
                <h2>Dining Table</h2>
                <div className="content">
                    <p className="tech-list">
                        <strong>Walnut | Cherry | Steel Table Legs</strong>
                    </p>
                </div>
            </div>
        </article>
    )
}