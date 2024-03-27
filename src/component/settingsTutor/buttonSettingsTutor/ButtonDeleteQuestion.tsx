import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import DeleteQuestionTutor from '../deleteQuestionTutor/DeleteQuestionTutor';



const ButtonDeleteQuestion = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <button
        className={`buttonModalDelete`}
        onClick={handleShow}
        style={{ margin: "0.5em" }}>
        <span className={`frontDelete`}>Question <i className="bi bi-trash3"></i></span>
      </button>

            <Modal show={show}
                onHide={handleClose}
                keyboard={false}>
                <Modal.Body>
                    <DeleteQuestionTutor />
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ButtonDeleteQuestion;