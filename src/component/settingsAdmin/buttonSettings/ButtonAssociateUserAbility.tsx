import { useState } from "react";
import { Modal } from "react-bootstrap";
import AssociationUserAbility from "../user_ability/AssociationUserAbility";
import './StyleModals.css';

const ButtonAssociateUserAbility = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <button
        className={`buttonDefault buttonModalAssociation`}
        onClick={handleShow}
        style={{ margin: "0.5em" }}
      >
        <span className={`frontDefault frontAssociation`}>User to Ability <i className="bi bi-person-fill-add"></i></span>
      </button>

      <Modal show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        scrollable>
        <Modal.Body>
          <AssociationUserAbility />
        </Modal.Body>
      </Modal>
    </>
  );
};
export default ButtonAssociateUserAbility;
