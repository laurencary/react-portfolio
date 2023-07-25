import About from "./About";
import ProjectType from "./ProjectType";
import ProjectData from './projects'


const Woodwork = () => {
    const projectTypes = ["furniture","office","decor"]
    return (
        <>
            <About />
            <div>
                {
                    projectTypes.map(category => (
                        <div key={category}>
                            <ProjectType 
                                type={ProjectData[category]["heading"]} 
                                projects={ProjectData[category]["projects"]}
                            />
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Woodwork;