import Tile from './Tile'

const ProjectType = ({type, projects}) => {

    return (
        <div>
            <h1 className='ww-project-header'>{type}</h1>
            <section className='tiles'>
                {projects.map(proj => (
                    <Tile project={proj} />
                ))}
                {/* <li>coffee table</li>
                <li>Kitchen workspace</li>
                <li>bench</li>
                <li>coat rack</li>
                <h1>Home Office</h1>
                <li>Desk</li>
                <li>monitor stand trapezoid</li>
                <li>monitor stand #2</li>
                <li>phone ampliphier</li>
                <h1>Decor</h1>
                <li>vases</li>
                <li>Cheese boards & candle holders</li>
                <li>Poster Frames</li> */}
            </section>
        </div>
    )
}

export default ProjectType