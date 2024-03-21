import { useState } from "react";
import Button from "react-bootstrap/Button";

const ButtonAssociateCourseAbility = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button
        variant="primary"
        onClick={handleShow}
        style={{ margin: "0.5em" }}
      >
        Course to Ability <i className="bi bi-person-fill-add"></i>
      </Button>
    </>
  );
};
export default ButtonAssociateCourseAbility;
