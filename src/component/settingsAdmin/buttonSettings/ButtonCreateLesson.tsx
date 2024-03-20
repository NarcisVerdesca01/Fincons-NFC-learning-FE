import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import CreateLesson from "../lesson/CreateLesson";

const ButtonCreateLesson = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button
        variant="success"
        onClick={handleShow}
        style={{ margin: "0.5em" }}
      >
        Add a new lesson <i className="bi bi-person-fill-add"></i>
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Body>
          <CreateLesson />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ButtonCreateLesson;
