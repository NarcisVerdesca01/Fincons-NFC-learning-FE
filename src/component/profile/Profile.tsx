import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import LoginRegistrationService from '../../services/LoginRegistrationService';
import Header from '../header/Header';
import User from '../../models/UserModel';
import './Profile.css';
import Ability from '../../models/AbilityModel';

const Profile = () => {
    const navigate = useNavigate();

    const [user, setUser] = useState<User>();
    const [abilities, setAbilities] = useState<Ability[]>([]);
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
            <div className={`containerUserProfile`}>
                <div className={`subContainerUserProfile`}>
                    <div className={`containerMenu`}>
                        <div className={`userDetails`}>
                            <p>{user?.firstName}{user?.lastName}</p>
                            <p>{user?.email}</p>
                        </div>
                        <div className={`userDetails`}>
                            <p>Abilities</p>
                            {abilities?.map((ability: any) => (
                                <div className={``}>
                                    ciao {ability.ability.name}
                                </div>
                            ))}
                        </div>
                        <div className={`userDetails`}>
                            <p>Courses</p>
                        </div>
                        <div className={`userDetails`}>
                            <p>Lessons</p>
                        </div>
                    </div>
                    <div className={`containerAll`}>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;