import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import QuizResults from '../quizResults/QuizResults';
import '../../settingsAdmin/buttonSettings/StyleModals.css';

const ButtonCreateQuiz = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <button
                className={`buttonDefault buttonModal`}
                onClick={handleShow}
                style={{ margin: "0.5em" }}>
                <span className={`frontDefault front`}>View <i className="bi bi-patch-question"></i></span>
            </button>

            <Modal show={show}
                onHide={handleClose}
                size='lg'
                scrollable
                >
                <Modal.Body>
                    <QuizResults />
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ButtonCreateQuiz;