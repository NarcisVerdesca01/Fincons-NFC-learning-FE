import React, { useState } from 'react';
import './Header.css';
import Login from '../login/Login';
import LoginRegistrationService from '../../services/LoginRegistrationService';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router';
import UserDetailModels from '../../models/UserDetailsModel';


const Header = () => {
    const navigate = useNavigate();
    const auth = Cookies.get("jwt-token");
    const [isHidden, setIsHidden] = useState<boolean>(true);

    const handleLogout = () => {
        Cookies.remove("jwt-token");
        console.log("sono appena uscito")
        navigate("/authentication");
        setIsHidden(true);
    };

    const goToCourses = () => {
        navigate("/courses")
    }
    const goToHomePage = () => {
        navigate("/homePage")
    }


    return (
        <div className={`bodyHeader`}>
            <div className={`firstComponentHeader`}>
                <h4>NFC E-Learning web site</h4>
            </div>
            <div className={`secondComponentHeader`}>
                <div className={`navbarHeader`}>
                    <div>
                        <button className={`buttonNavBar`} onClick={goToHomePage}>
                            Home Page
                        </button>
                    </div>
                    <div>
                        <button className={`buttonNavBar`} onClick={goToCourses}>
                            Courses
                        </button>
                    </div>
                    <div>
                        <button className={`buttonNavBar`}>
                            Quiz
                        </button>
                    </div>
                    <div>
                        <button className={`buttonNavBar`}>
                            Lessons
                        </button>
                    </div>
                    <div>
                        <button className={`buttonNavBar`} onClick={handleLogout}>
                            Logout
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Header;