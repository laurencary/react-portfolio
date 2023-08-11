// software engineer
// data analyst
// actuary
// student

import Chapter from "./Chapter";

const Season = ({ season, tag }) => {
    let chapters;
    if (season === "Career") {
        chapters = ["Software Engineer", "Analyst", "Actuary"]
    } else if (season === "Postsecondary Education") {
        chapters = ["University of Wisconsin - Madison", "Lawrence University"]
    } else {
        chapters = []
    }

    return (
        <div>
            <h1 id={tag}>{season}</h1>
            {chapters.map(item => (
                <Chapter title={item} season={season}/>
            ))}
        </div>
    )
}

export default Season;