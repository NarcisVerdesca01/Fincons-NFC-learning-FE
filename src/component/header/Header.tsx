import React, { useEffect, useState } from 'react';
import './Header.css';
import utils from "../../utils/Utils";

import Login from '../login/Login';
import LoginRegistrationService from '../../services/LoginRegistrationService';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router';
import UserDetailModels from '../../models/UserDetailsModel';
import { jwtDecode } from 'jwt-decode';


const Header = () => {
    const navigate = useNavigate();
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
                <div className={`containerTitleHeader`}>
                    <h4 className={`titleHeader`}>NFC E-Learning web site</h4>
                </div>
                <div className={`navbarHeader`}>
                    <div className={`containerNavBarHeader`}>
                        <div className={`containerButtonNavBar`}>
                            <button className={`buttonNavBar`} onClick={goToHomePage}>
                                <p className={`nameButton`}>Home Page</p>
                            </button>
                        </div>
                        <div className={`containerButtonNavBar`}>
                            <button className={`buttonNavBar`} onClick={goToCourses}>
                                <p className={`nameButton`}>Courses</p>
                            </button>
                        </div>
                        <div className={`containerButtonNavBar`}>
                            <button className={`buttonNavBar`}>
                                <p className={`nameButton`}>My courses</p>
                            </button>
                        </div>
                        <div className={`containerButtonNavBar`}>
                            <button className={`buttonNavBar`}>
                                <p className={`nameButton`}>Profile</p>
                            </button>
                        </div>
                        <div className={`containerButtonNavBar`}>
                            <button className={`buttonNavBar`} onClick={handleLogout}>
                                <p className={`nameButton`}>Logout</p>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Header;