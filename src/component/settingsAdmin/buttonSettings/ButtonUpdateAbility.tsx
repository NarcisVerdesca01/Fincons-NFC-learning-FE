import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import UpdateLesson from "../lesson/UpdateLesson";
import UpdateAbility from "../ability/UpdateAbility";

const ButtonUpdateAbility = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="warning" onClick={handleShow} style={{ margin: "0.5em" }}>
        Update <i className="bi bi-person-fill-add"></i>
      </Button>

      <Modal show={show} onHide={handleClose} keyboard={false}>
        <Modal.Body>
          <UpdateAbility />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ButtonUpdateAbility;