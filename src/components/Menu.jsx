const Menu = ({page}) => {

    const menuSections = {
        "human": [
            { "id":"professional", "title": "Career" },
            { "id":"education", "title": "Postsecondary Education" }
        ],
        "swe": [
            { "id": "about", "title": "About" },
            { "id": "projects", "title": "Projects" },
            { "id": "skills", "title": "Skills" }
        ],
        "woodwork":[
            { "id": "about", "title": "About" },
            { "id": "furniture", "title": "Large Furniture" },
            { "id": "office", "title": "Home Office" },
            { "id": "decor", "title": "Decor" }
        ]
    }

    return (
        <nav id="menu">
            <div className="inner">
                <h2>Menu</h2>
                <ul>
                    {menuSections[page].map((item) => (
                        <li key={`menu-${page}-${item.id}`}><a href={`#${item.id}`}>{item.title}</a></li>
                    ))}
                    <li><a href="#connect">Contact</a></li>
                </ul>
            </div>
            <a className="close" href="#menu">Close</a>
        </nav>
    )
}

export default Menu;


