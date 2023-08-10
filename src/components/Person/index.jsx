import MenuIcon from '../MenuIcon';
import Header from '../Header';
import Footer from '../Contact';
import Menu from '../Menu';

const Person = () => {
    return (
        <>
            <div id="wrapper">
                <MenuIcon page="swe" />
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
            <Menu page={"swe"} />
        </>
    )
}

export default Person