import Tile from './Tile'

const ProjectType = ({type, projects}) => {

    return (
        <div>
            <h1 className='ww-project-header'>{type}</h1>
            <section className='tiles'>
                {projects.map(proj => (
                    <Tile key={proj.name} project={proj} />
                ))}
            </section>
        </div>
    )
}

export default ProjectType