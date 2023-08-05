const Menu = ({isSwe}) => {

    return (
        <nav id="menu">
            <div className="inner">
                <h2>Menu</h2>
                <ul>
                    <li><a href="#about">About</a></li>
                    {isSwe ?
                        <>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#skills">Skills</a></li> 
                        </> : 
                        <>
                            <li><a href="#furniture">Large Furniture</a></li>
                            <li><a href="#office">Home Office</a></li>
                            <li><a href="#decor">Decor</a></li>
                        </>
                    }
                    <li><a href="#connect">Contact</a></li>
                </ul>
            </div>
            <a className="close" href="#menu">Close</a>
        </nav>
    )
}

export default Menu;


