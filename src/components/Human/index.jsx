import MenuIcon from '../MenuIcon';
import Header from '../Header';
import Footer from '../Contact';
import Menu from '../Menu';
import Timeline from './Timeline';

const Human = () => {
    return (
        <>
            <div id="wrapper">
                <MenuIcon page="human" />
                <Header page="human"/>
                <div id="main">
                    <div className="inner">
                        <Timeline />
                    </div>
                </div>
                <Footer />
            </div>
            <Menu page={"human"} />
        </>
    )
}

export default Human