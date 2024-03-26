import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import DeleteQuizTutor from '../deleteQuizTutor/DeleteQuizTutor';



const ButtonDeleteQuiz = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <button
        className={`buttonModalDelete`}
        onClick={handleShow}
        style={{ margin: "0.5em" }}>
        <span className={`frontDelete`}>Quiz <i className="bi bi-trash3"></i></span>
      </button>

            <Modal show={show}
                onHide={handleClose}
                keyboard={false}>
                <Modal.Body>
                    <DeleteQuizTutor />
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ButtonDeleteQuiz;