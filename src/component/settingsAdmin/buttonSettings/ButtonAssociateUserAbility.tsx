import { useState } from "react";
import { Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import AssociationUserAbility from "../user_ability/AssociationUserAbility";

const ButtonAssociateUserAbility = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button
        variant="primary"
        onClick={handleShow}
        style={{ margin: "0.5em" }}
      >
        User to Ability <i className="bi bi-person-fill-add"></i>
      </Button>

      <Modal show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}>
        <Modal.Body>
          <AssociationUserAbility />
        </Modal.Body>
      </Modal>
    </>
  );
};
export default ButtonAssociateUserAbility;
