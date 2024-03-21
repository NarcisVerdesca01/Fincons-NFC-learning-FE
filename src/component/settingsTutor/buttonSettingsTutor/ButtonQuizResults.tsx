import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import QuizResults from '../quizResults/QuizResults';

const ButtonCreateQuiz = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Button variant="success" onClick={handleShow} style={{ margin: "0.5em" }}>
                View <i className="bi bi-patch-question"></i>
            </Button>


            <Modal show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                size='lg'
                >
                <Modal.Body>
                    <QuizResults/>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ButtonCreateQuiz;