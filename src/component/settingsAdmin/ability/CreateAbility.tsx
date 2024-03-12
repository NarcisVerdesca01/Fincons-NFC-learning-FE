import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CourseService from "../../../services/CourseService";
import Course from "../../../models/CourseModel";
import Ability from "../../../models/AbilityModel";
import AbilityService from "../../../services/AbilityService";

const CreateAbility = () => {
    const [ability, setAbility] = useState<Ability>();
    const navigate = useNavigate();

    const saveAbility = () => {
        AbilityService.createAbility(ability!);
        navigate("/settings_admin")
    }

    const backToSettings = () => {
        navigate("/settings_admin")
    }

    return (
        <div>
            <div>
                <h3> Create Ability </h3>
                <div>
                    <form>
                        <div>
                            <label>Name</label>
                            <input
                                type="string"
                                placeholder="name"
                                name="name"
                                className="form-control"
                                value={ability?.name}
                                onChange={(e) => {
                                    setAbility({
                                        ...ability!,
                                        [e.target.name]: e.target.value,
                                    });
                                }}
                            ></input>
                        </div>
                        <button className='btn btn-success' onClick={saveAbility}>add</button>
                        <button className='btn btn-danger' onClick={backToSettings}>back</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateAbility;
