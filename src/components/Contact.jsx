import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { Modal } from "../context/Modal";
import EmailModal from "./EmailModal";
import loading from '../images/loading.gif'

const Contact = () => {
    const [userName, setUserName] = useState('')
    const [modalName, setModalName] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [modalEmail, setModalEmail] = useState('')
    const [userMessage, setUserMessage] = useState('')
    const [modalMessage, setModalMessage] = useState('')
    const [blankFields, setBlankFields] = useState(["Name","Email", "Message"])
    const [showFormWarnings, setShowFormWarnings] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [showLoading, setShowLoading] = useState(false)
    const form = useRef(); 

    const updateField = (field, value) => {
        if (value === '') {
            setBlankFields(prevState => [...prevState, field])
        } else if (field) {
            setBlankFields(prevState => prevState.filter(item => item !== field))
        }
        switch (field) {
            case "Name":
                setUserName(value);
                break
            case "Email":
                setUserEmail(value);
                break
            case "Message":
                setUserMessage(value);
                break
            default:
                break
        }
    }

    const sendEmail = (e) => {
        e.preventDefault();
        if (blankFields.length === 0) {
            setShowLoading(true);
            setModalName(userName);
            setModalEmail(userEmail);
            setModalMessage(userMessage);

            emailjs.sendForm('service_ouhkqgg', 'template_toocd6o', form.current, 'LF6QObbCdwqlcuKNw')
                .then((result) => {
                    setShowModal(true);
                    setShowLoading(false);
                    setUserEmail('');
                    setUserName('');
                    setUserMessage('');
                    setShowFormWarnings(false);
                    setBlankFields(["Name", "Email", "Message"]);
                }, (error) => {
                    // show the user an error
                });        
        }
    };

    return (
        <>
            <footer id="footer">
                <div className="inner">
                    <section>
                        <h2>Get in touch</h2>
                        <form ref={form} onSubmit={sendEmail}>
                            <div className="fields">
                            <div className="field half">
                                <input 
                                    type="text" 
                                    name="user_name" 
                                    id="name" 
                                    placeholder="Name *" 
                                    value={userName} 
                                    onChange={(e) => updateField("Name", e.target.value)} />
                            </div>
                            <div className="field half">
                                <input 
                                    type="email" 
                                    name="user_email" 
                                    id="email" 
                                    placeholder="Email *" 
                                    value={userEmail} 
                                        onChange={(e) => updateField("Email", e.target.value)}/>
                            </div>
                            <div className="field">
                                <textarea 
                                    name="message" 
                                    id="message" 
                                    placeholder="Message *" 
                                    value={userMessage} 
                                        onChange={(e) => updateField("Message", e.target.value)}></textarea>
                            </div>
                            </div>
                            <ul className="actions">
                                <li onMouseEnter={() => setShowFormWarnings(true)} onMouseLeave={() => setShowFormWarnings(false)}> 
                                    {!showLoading && <input type="submit" value="Send" className={ blankFields.length > 0 ? "disabled": "primary"} />}
                                    {showLoading && (<button className="primary loading-container"><img src={loading} alt="loading" /></button>)}
                                    <span className={showFormWarnings ? "form-warnings" : "hidden"}>
                                        { blankFields.length > 0 ? `Please fill out the following field(s): ${blankFields.join(", ")}` : '' }
                                    </span>
                                </li>
                            </ul>
                        </form>
                    </section> 
                    <section id="connect">
                        <h2>Connect</h2>
                        <ul className="icons">
                            <li><a href="https://github.com/laurencary" target="_blank" rel="noreferrer"className="icon brands style2 fa-github"><span className="label">GitHub</span></a></li>
                            <li><a href="https://www.linkedin.com/in/laurengcary/" target="_blank" rel="noreferrer"className="icon brands style2 fa-linkedin"><span className="label">LinkedIn</span></a></li>
                            <li><a href="https://wellfound.com/u/lauren-cary-3" target="_blank" rel="noreferrer"className="icon brands style2 fa-angellist"><span className="label">500px</span></a></li>
                        </ul>
                        <p>
                            Email: armstronglg720@gmail.com<br />
                            Phone: (262) 945-5851</p>
                        <ul className="actions">
                            <li><a href="https://drive.google.com/file/d/1_ziLgB-rrkys2G39o_lqeqOXmXz6o20-/view?usp=sharing" target="_blank" rel="noreferrer"className="button primary resume-button">{`Resume `} 
                                <i className="fa-solid fa-up-right-from-square live-link-icon"></i>
                            </a></li>
                        </ul>
                    </section>
                    <ul className="copyright">
                        <li>&copy; Untitled. All rights reserved</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
                    </ul>
                </div>
            </footer>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <EmailModal 
                        setShow={setShowModal}
                        email={modalEmail}
                        name={modalName}
                        message={modalMessage}
                    />
                </Modal>
            )}
        </>
    )
}

export default Contact;