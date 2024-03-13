import { useState } from "react";
import Button from "react-bootstrap/Button";

const ButtonAssociate = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button
        variant="success"
        onClick={handleShow}
        style={{ margin: "0.5em" }}
      >
        Associate... <i className="bi bi-person-fill-add"></i>
      </Button>
    </>
  );
};
export default ButtonAssociate;
