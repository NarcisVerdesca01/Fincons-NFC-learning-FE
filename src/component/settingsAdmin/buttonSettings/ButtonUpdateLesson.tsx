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
            <Button variant="info" onClick={handleShow} style={{ margin: "0.5em" }}>
                Update <i className="bi bi-person-fill-add"></i>
            </Button>

            <Modal show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}>
                <Modal.Body>
                    <UpdateLesson />
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ButtonUpdateLesson;