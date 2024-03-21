import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import DeleteLesson from '../lesson/DeleteLesson';


const ButtonDeleteLesson = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <button
        className={`buttonModalDelete`}
        onClick={handleShow}
        style={{ margin: "0.5em" }}>
        <span className={`frontDelete`}>Lesson <i className="bi bi-trash3"></i></span>
      </button>

            <Modal show={show}
                onHide={handleClose}
                keyboard={false}>
                <Modal.Body>
                    <DeleteLesson />
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ButtonDeleteLesson;