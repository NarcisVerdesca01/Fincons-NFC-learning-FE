import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import LoginRegistrationService from '../../services/LoginRegistrationService';
import Header from '../header/Header';
import User from '../../models/UserModel';
import './Profile.css'
import Course from '../../models/CourseModel';
import Ability from '../../models/AbilityModel';

const Profile = () => {
    const navigate = useNavigate();

    const [user, setUser] = useState<User>();
    const [abilities, setAbilities] = useState<any>();
    useEffect(() => {
        LoginRegistrationService.getUserDetails().then((res) => {
            console.log(res.data.abilities, "get userDetails");
            setUser(res.data);
            setAbilities(res.data.abilities);

        });

    }, []);

    return (
        <div className={`componentPageProfile`}>
            <Header />
            <div className={`containerProfile`}>
                <div className={`containerCredencial`}>
                    <div className={`detailsUser`}>
                        <p className={`nameProfile`}>{user?.firstName} {user?.lastName}</p>
                        <p className={`emailProfile`}>{user?.email}</p>
                    </div>

                </div>
                <div className={`containerCoursesUser`}>
                    {abilities?.map((ability: any) => (
                        <div className={``} >
                            <p>Ability:</p>
                            <p>{ability.ability.name}</p>

                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
};

export default Profile;