import { FiX } from 'react-icons/fi'

const EmailModal = ({ email, name, message, setShow }) => {
    return (
        <div className="modal-container">
            <header className='modal-header'>
                <h2>Thank you for reaching out</h2>
                <div onClick={() => setShow(false)} className='close-button'><FiX /></div>
            </header>
            <p className='modal-p'>The following message was sent to Lauren:</p>
            <hr className='modal-hr'></hr>
            <div>
                <p>From: <strong>{name}</strong>{` <${email}>`}</p>
                <p className='modal-message'>{message}</p>
            </div>
        </div>
    )
}

export default EmailModal;