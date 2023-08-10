import { NavLink } from 'react-router-dom'


const MenuIcon = ({ page }) => {
    return (
        <header id="header">
            <div className="inner">
                <nav>
                    <ul>
                        <li><NavLink className={page === "swe" ? "nav-link-selected" : "nav-link" } to="/swe">Software Engineer</NavLink></li>
                        <li><NavLink className={page === "woodwork" ? "nav-link-selected" : "nav-link"} to="/woodworker">Woodworker</NavLink></li>
                        {/* <li><NavLink className={page === "person" ? "nav-link-selected" : "nav-link"} to="/person">Person</NavLink></li> */}
                        <li><a href="#menu">Menu</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default MenuIcon