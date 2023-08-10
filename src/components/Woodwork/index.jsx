import About from "./About";
import ProjectType from "./ProjectType";
import ProjectData from './projects'
import MenuIcon from '../MenuIcon';
import Header from '../Header';
import Footer from '../Contact';
import Menu from '../Menu';

const Woodwork = () => {
    const projectTypes = ["furniture","office","decor"]
    return (
        <>  
            <div id="wrapper">
                <MenuIcon page="woodwork" />
                <Header />
                <div id="main">
                    <div className="inner">
                        <About />
                        <div>
                            {projectTypes.map(category => (
                                <div key={category} id={category}>
                                    <ProjectType 
                                        type={ProjectData[category]["heading"]} 
                                        projects={ProjectData[category]["projects"]}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <Footer />
            </div >
            <Menu page={"woodwork"} />
        </>
    )
}

export default Woodwork;