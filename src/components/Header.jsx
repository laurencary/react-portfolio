import Me from '../images/me.jpg'

const Header = ({page}) => {

    const noun = {
        "swe": "Developer",
        "woodwork": "Craftor",
        "human": "Human"
    }

    return (
        <div className="heading">
            <div className='heading-left'>
                <img src={Me} alt="Lauren Cary" className="headshot" />
                <div className='heading-text-container'>
                    <h1 className="heading-me-text">Hi, I'm Lauren Cary<br /></h1>
                    <h1> {`<Thoughtful${noun[page]} />`} </h1>
                </div>
            </div>
            <div className='heading-right'></div>
        </div>
    )
}

export default Header