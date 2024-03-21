import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Ability from "../../../models/AbilityModel";
import AbilityService from "../../../services/AbilityService";
import Cookies from "js-cookie";

const DeleteAbility = () => {
    const [abilities, setAblilities] = useState<Ability[]>([]);
    const [abilityId, setAbilityId] = useState<number | null>(null);
    const [ability, setAbility] = useState<Ability>();
    const navigate = useNavigate();

    useEffect(() => {
        AbilityService.getAbilities().then((res) => {
            setAblilities(res.data);
        });
    }, []);

    useEffect(() => {
        if (abilityId !== null) {
            AbilityService.getAbilityById(abilityId!).then((res) => {
                setAbility(res.data);
            });
        }
    }, [abilityId]);

    const DeleteAbility = () => {
        console.log(abilityId) 
        AbilityService.deleteAbility(abilityId!)
        
        navigate("/settings_admin");
    };

    const backToSettings = () => {
        navigate("/settings_admin");
    };

    return (
        <div>
            <div>
                <h3>Delete Ability</h3>
                <div>
                    <form>
                        <div className="form-group">
                            <label>Ability</label>
                            <select
                                name="course"
                                className="form-select"
                                aria-label="Default select example"
                                onChange={(e) => {
                                    console.log(Number(e.target.value))
                                    setAbilityId(Number(e.target.value));
                                }}
                            >
                                <option selected>Select the Course to Delete</option>
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
                                    <label>Name: </label>
                                    <p>{ability.name}</p>
                                </div>
                                <button className="btn btn-success" onClick={DeleteAbility}>
                                    delete
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

export default DeleteAbility;