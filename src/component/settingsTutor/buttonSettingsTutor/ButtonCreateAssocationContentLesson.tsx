import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CreateAssociationContentLesson from '../createAssociationContentLesson/CreateAssociationContentLesson';


const ButtonCreateAssociationContentLesson = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Button variant="success" onClick={handleShow} style={{ margin: "0.5em" }}>
                Associate <i className="bi bi-person-fill-add"></i>
            </Button>

        
            <Modal show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}>
                <Modal.Body>
                    <CreateAssociationContentLesson />
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ButtonCreateAssociationContentLesson;