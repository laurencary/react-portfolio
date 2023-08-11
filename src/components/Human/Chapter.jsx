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

    console.log(items);
    return (
        <div>
            <h2>{title}</h2>
            {items.map((item) => (
                <h3>{item.title}</h3>
            ))}
        </div>
    )
}

export default Chapter;