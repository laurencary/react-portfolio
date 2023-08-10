import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import MenuIcon from '../MenuIcon';
import Header from '../Header';
import Footer from '../Contact';
import Menu from '../Menu';

const Software = () => {
    return (
        <>
            <div id="wrapper">
                <MenuIcon isSwe={true} />
                <Header />
                <div id="main">
                    <div className="inner">
                        <About />
                        <Projects />
                        <Skills />
                    </div>
                </div>
                <Footer />
            </div>
            <Menu isSwe={"swe"}/>
        </>
    )
}

export default Software;