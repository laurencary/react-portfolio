import DiningTable from '../../images/ww/dining_table_final.jpg'
import projects from './projects'
const ProjectType = ({type}) => {

    return (
        <div>
            <h1>{projects[type]["heading"]}</h1>
            <section className='ww-tiles'>
                
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