import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import UpdateAbility from "../ability/UpdateAbility";

const ButtonUpdateAbility = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <button
        className={`buttonModalUpdate`}
        onClick={handleShow}
        style={{ margin: "0.5em" }}>
        <span className={`frontUpdate`}>Ability <i className="bi bi-arrow-repeat"></i></span>
      </button>

      <Modal show={show} onHide={handleClose} keyboard={false}>
        <Modal.Body>
          <UpdateAbility />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ButtonUpdateAbility;
