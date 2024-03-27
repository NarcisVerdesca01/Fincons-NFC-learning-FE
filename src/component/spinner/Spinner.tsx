import React, { useEffect, useState } from "react";
import "./Spinner.css";
import { useNavigate } from "react-router-dom";

const Spinner = () => {
  const navigate = useNavigate();
  const [showSpinner, setShowSpinner] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSpinner(false);
      navigate("/home");
      window.location.reload(); // Reload the page
    }, 2000);
  }, []);

  return (
    <div>
      {showSpinner && (
        <div className="lds-spinner" >
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      )}
    </div>
  );
};

export default Spinner;