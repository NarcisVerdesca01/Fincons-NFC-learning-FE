import { useState } from "react";
import { Modal } from "react-bootstrap";
import AssociationAbilityCourse from "../ability_course/AssociationAbilityCourse";
import './StyleModals.css';

const ButtonAssociateCourseAbility = () => {
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
        <span className={`frontDefault frontAssociation`}>Course to Ability <i className="bi bi-person-fill-add"></i></span>
      </button>

      <Modal show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        scrollable>
        <Modal.Body>
          <AssociationAbilityCourse />
        </Modal.Body>
      </Modal>
    </>
  );
};
export default ButtonAssociateCourseAbility;
