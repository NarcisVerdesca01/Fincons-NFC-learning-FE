import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import UpdateLesson from '../lesson/UpdateLesson';


const ButtonUpdateLesson = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <button
        className={`buttonModalUpdate`}
        onClick={handleShow}
        style={{ margin: "0.5em" }}>
        <span className={`frontUpdate`}>Course <i className="bi bi-trash3"></i></span>
      </button>

            <Modal show={show}
                onHide={handleClose}
                keyboard={false}>
                <Modal.Body>
                    <UpdateLesson />
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ButtonUpdateLesson;