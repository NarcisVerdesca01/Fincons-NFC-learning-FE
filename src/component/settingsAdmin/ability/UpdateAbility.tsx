import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AbilityService from "../../../services/AbilityService";
import Ability from "../../../models/AbilityModel";

const UpdateAbility = () => {
  const [abilities, setAbilities] = useState<Ability[]>([]);
  const [selectedAbilityId, setSelectedAbilityId] = useState<number | null>(
    null
  );
  const [ability, setAbility] = useState<Ability>();
  const [nameError, setNameError] = useState(false);
  const [nameErrorMessage, setNameErrorMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    AbilityService.getAbilities().then((res) => {
      setAbilities(res.data);
    });
  }, []);

  useEffect(() => {
    if (selectedAbilityId !== null) {
      AbilityService.getAbilityById(selectedAbilityId).then((res) => {
        setAbility(res.data);
      });
    }
  }, [selectedAbilityId]);

  const UpdateAbility = () => {
    if (nameError) {
      return;
    }

    AbilityService.updateAbility(selectedAbilityId!, ability!);
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
      setErrorMessage("Name mustbe between 1 and 255 characters");
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
        <h3 className="titleModal">Update Ability</h3>
        <div>
          <form>
            <div className="form-group">
              <label className="labelModal">Ability</label>
              <select
                name="ability"
                className="form-select"
                aria-label="Default select example"
                onChange={(e) => {
                  setSelectedAbilityId(Number(e.target.value));
                }}
              >
                <option selected>Select the Ability to update</option>
                {abilities.map((ability) => {
                  return (
                    <option key={ability.id} value={ability.id}>
                      {ability.name}
                    </option>
                  );
                })}
              </select>
            </div>
            {ability && (
              <>
                <div>
                  <label className="labelModal">Name</label>
                  <input
                    type="string"
                    placeholder={ability.name}
                    name="name"
                    className={`form-control ${
                      nameError ? "border-red-500" : ""
                    }`}
                    value={ability.name}
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
                    onClick={UpdateAbility}
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
              </>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};
export default UpdateAbility;
