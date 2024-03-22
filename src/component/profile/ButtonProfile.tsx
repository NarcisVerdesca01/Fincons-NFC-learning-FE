import { Button, Modal } from "react-bootstrap";
import Profile from "./Profile";
import { useState } from "react";

const ButtonProfile = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const overlayStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.0)',
    zIndex: 998 // Assicurati che lo zIndex sia superiore allo zIndex della modale per posizionarlo sopra
  };

  return (
    <>
      <Button variant="light" onClick={handleShow} style={{ margin: "0.5em", borderRadius: "50%" }}>
        <i className="bi bi-person-fill"></i>
      </Button>

      {show && <div style={overlayStyle} />}

      <Modal show={show} onHide={handleClose} keyboard={false}>
        <Modal.Body>
          <Profile/>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ButtonProfile;
