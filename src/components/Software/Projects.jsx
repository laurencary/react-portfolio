import SlaqueSnap from '../../images/swe/slaque.png'
import WeatherSnap from '../../images/swe/what-weather-where.png'
import RendezView from '../../images/swe/rendez-view.png'

const Projects = () => {
    return (
        <>
            <h1 id="projects" className="section-title">Projects</h1>
            <section className="tiles">
                <article className="style1">
                    <span className="image">
                        <img src={SlaqueSnap} alt="Slack Clone - Full stack project" />
                    </span>
                    <div className="tile-text">
                        <h2>Slaque</h2>
                        <div className="content">
                            <p className="tech-list">
                                <strong>React.js | Redux | Ruby on Rails | Web Sockets</strong>
                            </p>
                            <p>A Slack clone where users can launch workspaces,
                                manage channels, direct messages, and workspace profiles.
                                The main feature is chatting, editing and deleting messages
                                in real time with other users.</p>
                            <div className="project-links-container">
                                <a href="https://github.com/laurencary/Slaque" target="_blank" rel="noreferrer" className="icon brands style2 fa-github project-link"><span className="label">GitHub</span></a>
                                <a href="https://slaque-app-dddbd857f989.herokuapp.com/" target="_blank" rel="noreferrer" className="icon brands style2 project-link"><i className="fa-solid fa-up-right-from-square live-link-icon"></i></a>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="style2">
                    <span className="image">
                        <img src={WeatherSnap} alt="What Weather Where - Vanilla JS" />
                    </span>
                    <div className="tile-text">
                        <h2>What Weather Where</h2>
                        <div className="content">
                            <p className="tech-list">
                                <strong>JS | Chart.js</strong>
                            </p>
                            <p>A historical weather metrics dashboard using Open-Mateo APIs to
                                fetch weather data for multiple locations in vanilla JavaScript.
                                The dynamic charts were created using Chart.js.
                            </p>
                            <div className="project-links-container">
                                <a href="https://github.com/laurencary/what-weather-where" target="_blank" rel="noreferrer"
                                    className="icon brands style2 fa-github project-link"><span className="label">GitHub</span></a>
                                <a href="https://laurencary.github.io/what-weather-where/" target="_blank" rel="noreferrer" className="icon brands style2 project-link"><i
                                    className="fa-solid fa-up-right-from-square live-link-icon"></i></a>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="style3">
                    <span className="image">
                        <img src={RendezView} alt="MERN Stack - Group Project" />
                    </span>
                    <div className="tile-text">
                        <h2>RendezView</h2>
                        <div className="content">
                            <p className="tech-list">
                                <strong>MongoDB | Express.js | React | Node.js</strong>
                            </p>
                            <p>RendezView is a unique web application designed to streamline event planning amongst friends. Leveraging the power of
                                OpenAI, RendezView generates event ideas, perfect for those who want to socialize but aren't sure what activities are
                                available.</p>
                            <div className="project-links-container">
                                <a href="https://github.com/kennyvungo/smelk" target="_blank" rel="noreferrer"
                                    className="icon brands style2 fa-github project-link"><span className="label">GitHub</span></a>
                                <a href="https://smelk.onrender.com/" target="_blank" rel="noreferrer" className="icon brands style2 project-link"><i
                                    className="fa-solid fa-up-right-from-square live-link-icon"></i></a>
                            </div>
                        </div>
                    </div>
                </article>

            </section>
        </>
    )
}

export default Projects;