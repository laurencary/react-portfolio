const Contact = () => {
    return (
        <footer id="footer">
            <div className="inner">
                {/* <section>
                    <h2>Get in touch</h2>
                    <form method="post" action="#">
                        <div className="fields">
                        <div className="field half">
                            <input type="text" name="name" id="name" placeholder="Name" />
                        </div>
                        <div className="field half">
                            <input type="email" name="email" id="email" placeholder="Email" />
                        </div>
                        <div className="field">
                            <textarea name="message" id="message" placeholder="Message"></textarea>
                        </div>
                        </div>
                        <ul className="actions">
                            <li><input type="submit" value="Send" className="primary" /></li>
                        </ul>
                    </form>
                  </section>  */}
                <section id="connect">
                    <h2>Contact</h2>
                    <ul className="icons">
                        <li><a href="https://github.com/laurencary" target="_blank" rel="noreferrer"className="icon brands style2 fa-github"><span className="label">GitHub</span></a></li>
                        <li><a href="https://www.linkedin.com/in/laurengcary/" target="_blank" rel="noreferrer"className="icon brands style2 fa-linkedin"><span className="label">LinkedIn</span></a></li>
                        <li><a href="https://wellfound.com/u/lauren-cary-3" target="_blank" rel="noreferrer"className="icon brands style2 fa-angellist"><span className="label">500px</span></a></li>
                    </ul>
                    <p>
                        Email: armstronglg720@gmail.com<br />
                        Phone: (262) 945-5851</p>
                    <ul className="actions">
                        <li><a href="#" target="_blank" rel="noreferrer"className="button primary">Resume 
                            <i className="fa-solid fa-up-right-from-square live-link-icon"></i>
                            {/* <img className="live-link-icon" src="images/up-right-from-square-solid.svg" alt="Open Live Website" /> */}
                        </a></li>
                    </ul>
                </section>
                <ul className="copyright">
                    <li>&copy; Untitled. All rights reserved</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Contact;