import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CreateAssociationContentLesson from '../createAssociationContentLesson/CreateAssociationContentLesson';


const ButtonAssociationContentLesson = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <button
                className={`buttonModalAssociation`}
                onClick={handleShow}
                style={{ margin: "0.5em" }}
            >
                <span className={`frontAssociation`}>Content to Lesson <i className="bi bi-arrows-angle-contract"></i></span>
            </button>

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

export default ButtonAssociationContentLesson;