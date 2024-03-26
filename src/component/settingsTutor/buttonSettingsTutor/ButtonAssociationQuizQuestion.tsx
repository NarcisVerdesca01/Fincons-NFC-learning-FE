import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CreateAssociationQuizQuestion from '../createAssociationQuizQuestion/CreateAssociationQuizQuestion';


const ButtonAssociationQuizQuestion = () => {
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
                <span className={`frontAssociation`}>Quiz to Question <i className="bi bi-arrows-angle-contract"></i></span>
            </button>

            <Modal show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}>
                <Modal.Body>
                    <CreateAssociationQuizQuestion />
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ButtonAssociationQuizQuestion;