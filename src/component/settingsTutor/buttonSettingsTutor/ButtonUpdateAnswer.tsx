import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import UpdateAnswerTutor from "../updateAnswerTutor/UpdateAnswerTutor";

const ButtonUpdateQuestion = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <button
        className={`buttonModalUpdate`}
        onClick={handleShow}
        style={{ margin: "0.5em" }}>
        <span className={`frontUpdate`}>Answer <i className="bi bi-arrow-repeat"></i></span>
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