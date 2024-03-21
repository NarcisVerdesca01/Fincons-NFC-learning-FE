import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CreateQuestion from '../createQuestionTutor/CreateQuestion';

const ButtonCreateQuestion = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Button variant="success" onClick={handleShow} style={{ margin: "0.5em" }}>
                Create <i className="bi bi-patch-question"></i>
            </Button>


            <Modal show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}>
                <Modal.Body>
                    <CreateQuestion/>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ButtonCreateQuestion;