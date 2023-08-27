import CareerItem from './CareerItem';
import CareerItems from './career.json'

const Chapter = ({ title, season }) => {
    let items;
    if (season === "Career") {
        items = CareerItems[title]
    } else if (season === "Postsecondary Education") {
        items = ["University of Wisconsin - Madison", "Lawrence University"]
    } else {
        items = []
    }

    return (
        <div>
            <h2>{title}</h2>
            {season === "Career" && items.map((item) => (
                <CareerItem key={`career-${item.title}`} item={item} />
            ))}
        </div>
    )
}

export default Chapter;