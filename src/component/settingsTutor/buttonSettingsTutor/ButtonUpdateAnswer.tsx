import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import UpdateAnswerTutor from "../updateAnswerTutor/UpdateAnswerTutor";
import '../../settingsAdmin/buttonSettings/StyleModals.css';

const ButtonUpdateQuestion = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
    <>
      <button
        className={`buttonDefault buttonModalUpdate`}
        onClick={handleShow}
        style={{ margin: "0.5em" }}>
        <span className={`frontDefault frontUpdate`}>Answer <i className="bi bi-arrow-repeat"></i></span>
      </button>

      <Modal show={show} onHide={handleClose} keyboard={false}>
        <Modal.Body>
          <UpdateAnswerTutor />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ButtonUpdateQuestion;
