import MenuIcon from '../MenuIcon';
import Header from '../Header';
import Footer from '../Contact';
import Menu from '../Menu';

const Human = () => {
    return (
        <>
            <div id="wrapper">
                <MenuIcon page="human" />
                <Header page="human"/>
                <div id="main">
                    <div className="inner">

                    </div>
                </div>
                <Footer />
            </div>
            <Menu page={"human"} />
        </>
    )
}

export default Human