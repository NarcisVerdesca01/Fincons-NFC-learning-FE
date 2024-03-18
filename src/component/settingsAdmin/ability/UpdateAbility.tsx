import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AbilityService from "../../../services/AbilityService";
import Ability from "../../../models/AbilityModel";

const UpdateAbility = () => {
    const [abilities, setAbilities] = useState<Ability[]>([]);
    const [selectedAbilityId, setSelectedAbilityId] = useState<number | null>(null);
    const [ability, setAbility] = useState<Ability>();
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
        AbilityService.updateAbility(selectedAbilityId!, ability!);
        navigate("/settings_admin");
    };

    const backToSettings = () => {
        navigate("/settings_admin");
    };

    return (
        <div>
            <div>
                <h3>Update Ability</h3>
                <div>
                    <form>
                        <div className="form-group">
                            <label>Ability</label>
                            <select
                                name="course"
                                className="form-select"
                                aria-label="Default select example"
                                onChange={(e) => {
                                    setSelectedAbilityId(Number(e.target.value));
                                }}
                            >
                                <option selected>Select the Course to update</option>
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
                                    <label>Name</label>
                                    <input
                                        type="string"
                                        placeholder={ability.name}
                                        name="name"
                                        className="form-control"
                                        value={ability.name}
                                        onChange={(e) => {
                                            setAbility({
                                                ...ability,
                                                name: e.target.value
                                            });
                                        }}
                                    ></input>
                                </div>
                                <button className="btn btn-success" onClick={UpdateAbility}>
                                    update
                                </button>
                                <button className="btn btn-danger" onClick={backToSettings}>
                                    back
                                </button>
                            </>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateAbility;