import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import UpdateCourse from '../course/UpdateCourse';


const ButtonUpdateCourse = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <button
        className={`buttonModalUpdate`}
        onClick={handleShow}
        style={{ margin: "0.5em" }}>
        <span className={`frontUpdate`}>Course <i className="bi bi-arrow-repeat"></i></span>
      </button>

            <Modal show={show}
                onHide={handleClose}
                keyboard={false}>
                <Modal.Body>
                    <UpdateCourse />
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ButtonUpdateCourse;