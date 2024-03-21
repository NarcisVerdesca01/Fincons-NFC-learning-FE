import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AbilityService from "../../../services/AbilityService";
import Ability from "../../../models/AbilityModel";
import User from "../../../models/UserModel";
import LoginRegistrationService from "../../../services/LoginRegistrationService";

const CreateAssociationCourseLesson = () => {
    const [user, setUser] = useState<User>();
    const [ability, setAbility] = useState<any>();
    const [abilityId, setAbilityId] = useState<any>();
    const navigate = useNavigate();

    useEffect(() => {
        LoginRegistrationService.getUserDetails().then((res) => {
          console.log(res.data, "get userDetails");
          setUser(res.data);
        });
      }, []);

    useEffect(() => {
        AbilityService.getAbilities().then((res) => {
            setAbility(res.data);
        })
    }, []);

    const saveCourseLesson = () => {
        console.log("ability id ", abilityId.ability)
        console.log("user id ", user)
        AbilityUserService.createAbilityUser(abilityId.ability)
        navigate("/settings_admin");
    }

    const backToSettingsCourseLesson = () => {
        navigate("/settings_admin");
    }

    return (
        <div>
            <div>
                <h3> Associate User with Ability </h3>
                <div>
                    <form>
                        <div className="form-group">
                            <div>User: <text>{user?.firstName} {user?.lastName}</text></div>
                            
                        </div>
                        <div className="form-group">
                            <label>Ability</label>
                            <select
                                name="ability"
                                className="form-select"
                                aria-label="Default select example"
                                onChange={(e) => {
                                    setAbilityId({
                                        [e.target.name]: e.target.value
                                    });
                                }}
                            >
                                <option selected>Select the Ability</option>
                                {ability?.map((ability: Ability, index: any) => {
                                    return (
                                        <option key={index} value={ability.id}>{ability.name}</option>
                                    );
                                })}
                            </select>
                        </div>
                        <button className='btn btn-success' onClick={saveCourseLesson}>add</button>
                        <button className='btn btn-danger' onClick={backToSettingsCourseLesson}>Back</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateAssociationCourseLesson;