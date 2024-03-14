import React, { useEffect, useState } from "react";
import "./Spinner.css";
import { useNavigate } from "react-router-dom";

const Spinner = () => {
  const navigate = useNavigate();
  const [showSpinner, setShowSpinner] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSpinner(false);
      navigate("/homePage");
      window.location.reload(); // Reload the page
    }, 2000);
  }, []);

  const handleTransitionEnd = () => {
    navigate("/homePage");
    window.location.reload(); // ricarica la pagina
  };

  return (
    <div>
      {showSpinner && (
        <div className="lds-spinner" onTransitionEnd={handleTransitionEnd}>
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