import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AbilityService from "../../../services/AbilityService";
import Ability from "../../../models/AbilityModel";

const CreateAbility = () => {
  const [ability, setAbility] = useState<Ability>();
  const [nameError, setNameError] = useState(false);
  const [nameErrorMessage, setNameErrorMessage] = useState("");
  const navigate = useNavigate();

  const saveAbility = () => {
    if (nameError) {
      return;
    }

    AbilityService.createAbility(ability!);
    navigate("/settings_admin");
  };

  const backToSettings = () => {
    navigate("/settings_admin");
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    setError: React.Dispatch<React.SetStateAction<boolean>>,
    setErrorMessage: React.Dispatch<React.SetStateAction<string>>
  ) => {
    const { name, value } = event.target;
    const inputValue = value.trim();
    const inputLength = inputValue.length;

    if (name === "name" && (inputLength < 1 || inputLength > 255)) {
      setError(true);
      setErrorMessage("Name must be between 1 and 255 characters");
    } else {
      setError(false);
      setErrorMessage("");
    }

    setAbility({
      ...ability!,
      [name]: inputValue,
    });
  };

  return (
    <div>
      <div>
        <h3 className="titleModal">Create Ability</h3>
        <div>
          <form>
            <div>
              <label className="labelModal">Name</label>
              <input
                type="string"
                placeholder="Name"
                name="name"
                className={`form-control ${nameError ? "border-red-500" : ""}`}
                value={ability?.name}
                onChange={(e) =>
                  handleInputChange(e, setNameError, setNameErrorMessage)
                }
              ></input>
              {nameErrorMessage && (
                <p className="text-muted">{nameErrorMessage}</p>
              )}
            </div>
            <div className="containerButtonModal">
              <button
                className="buttonCheck"
                onClick={saveAbility}
                disabled={nameError}
              >
                <span className="frontCheck">
                  <i className="bi bi-check2"></i>
                </span>
              </button>
              <button className="buttonReturn" onClick={backToSettings}>
                <span className="frontReturn">
                  <i className="bi bi-arrow-left"></i>
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateAbility;
