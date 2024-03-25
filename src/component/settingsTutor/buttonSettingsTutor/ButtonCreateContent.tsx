import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CreateContent from '../createContentTutor/CreateContent';

const ButtonCreateContent = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Button variant="success" onClick={handleShow} style={{ margin: "0.5em" }}>
                Create <i className="bi bi-play-btn"></i>
            </Button>


            <Modal show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}>
                <Modal.Body>
                    <CreateContent/>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ButtonCreateContent;