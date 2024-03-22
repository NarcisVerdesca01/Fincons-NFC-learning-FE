import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import DeleteAbility from '../ability/DeleteAbility';


const ButtonDeleteAbility = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <button
        className={`buttonModalDelete`}
        onClick={handleShow}
        style={{ margin: "0.5em" }}>
        <span className={`frontDelete`}>Ability <i className="bi bi-trash3"></i></span>
      </button>

            <Modal show={show}
                onHide={handleClose}
                keyboard={false}>
                <Modal.Body>
                    <DeleteAbility />
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ButtonDeleteAbility;