const Menu = () => {
    return (
        <nav id="menu">
            <div className="inner">
                <h2>Menu</h2>
                <ul>
                    {/* <li><a href="index.html">Home</a></li> */}
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#connect">Contact</a></li>
                </ul>
            </div>
            <a className="close" href="#menu">Close</a>
        </nav>
    )
}

export default Menu;


