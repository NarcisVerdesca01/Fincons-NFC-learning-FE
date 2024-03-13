import { useEffect, useState } from 'react';
import './Header.css';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router';
import UserService from '../../services/UserService';

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
    const goToPageDedicatedCourses = () => {
        navigate("/page_dedicated_courses")
    }
    const goToSettingsTutor = () => {
        navigate("/settings_tutor")
    }
    const goToSettingsAdmin = () => {
        navigate("/settings_admin")
    }

    const auth = Cookies.get("jwt-token")
    const decodedJwt = jwtDecode(auth!)
    const userEmail = decodedJwt.sub

    const [adminNavBar, setAdminNavBar] = useState<boolean>(false);
    const [tutorNavBar, setTutorNavBar] = useState<boolean>(false);
    useEffect(() => {
        UserService.getUserDetails(userEmail!).then((res) => {
            if(res.data.data.roles[0].name == "ROLE_ADMIN"){
                setAdminNavBar(true)
            } else if (res.data.data.roles[0].name == "ROLE_TUTOR"){
                setTutorNavBar(true)
            }
        });
    }, [userEmail!]);

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
                                <button className={`buttonNavBar`} onClick={goToPageDedicatedCourses}>
                                    <p className={`nameButton`}>My courses</p>
                                </button>
                            </div>
                        {tutorNavBar && (
                            <div className={`containerButtonNavBar`}>
                                 <button className={`buttonNavBar`} onClick={goToSettingsTutor}>
                                    <p className={`nameButton`}>Settings</p>
                                </button>
                            </div>
                        )}
                        {adminNavBar && (
                            <div className={`containerButtonNavBar`}>
                                <button className={`buttonNavBar`} onClick={goToSettingsAdmin}>
                                    <p className={`nameButton`}>Settings</p>
                                </button>
                            </div>
                        )}
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