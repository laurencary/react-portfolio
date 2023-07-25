import { NavLink } from 'react-router-dom'


const MenuIcon = ({ isSwe }) => {
    return (
        <header id="header">
            <div className="inner">
                <nav>
                    <ul>
                        <li><NavLink className={isSwe ? "nav-link-selected" : "nav-link" } to="/swe">Software Engineer</NavLink></li>
                        <li><NavLink className={!isSwe ? "nav-link-selected" : "nav-link"} to="/woodworker">Woodworker</NavLink></li>
                        <li><a href="#menu">Menu</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default MenuIcon