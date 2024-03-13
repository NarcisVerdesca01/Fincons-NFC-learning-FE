import { useNavigate } from "react-router";
import Header from "../header/Header";
import "./SettingsAdmin.css";
import ButtonCreateAbility from "./buttonSettings/ButtonCreateAbility";
import ButtonCreateCourse from "./buttonSettings/ButtonCreateCourse";
import ButtonCreateLesson from "./buttonSettings/ButtonCreateLesson";
import ButtonUpdateAbility from "./buttonSettings/ButtonUpdateAbility";
import ButtonUpdateCourse from "./buttonSettings/ButtonUpdateCourse";
import ButtonUpdateLesson from "./buttonSettings/ButtonUpdateLesson";


const SettingsAdmin = () => {


    return (
        <>
            <Header />
            <div className={`containerSettingsAdmin`}>
                <div>
                    <h1>Settings</h1>
                </div>
                <div className={`sectionContainer`}>
                    <div className={`containerOptions`}>
                        <p>Create section</p>
                        <div className={`optionSettings`}>
                            <p className={`descriptionOptionSettings`}>Create Course</p>
                            <ButtonCreateCourse />
                        </div>
                        <div className={`optionSettings`}>
                            <p className={`descriptionOptionSettings`}>Create Lesson</p>
                            <ButtonCreateLesson />
                        </div>
                        <div className={`optionSettings`}>
                            <p className={`descriptionOptionSettings`}>Create Ability</p>
                            <ButtonCreateAbility />
                        </div>
                    </div>
                    <div className={`containerOptions`}>
                        <p>Associate section</p>
                        <div className={`optionSettings`}>
                            <p className={`descriptionOptionSettings`}>Associate...</p>
                        </div>
                        <div className={`optionSettings`}>
                            <p className={`descriptionOptionSettings`}>Associate...</p>
                        </div>
                        <div className={`optionSettings`}>
                            <p className={`descriptionOptionSettings`}>Associate...</p>
                        </div>
                    </div>
                    <div className={`containerOptions`}>
                        <p>Update section</p>
                        <div className={`optionSettings`}>
                            <p className={`descriptionOptionSettings`}>Update Course</p>
                            <ButtonUpdateCourse />
                        </div>
                        <div className={`optionSettings`}>
                            <p className={`descriptionOptionSettings`}>Update Lesson</p>
                            <ButtonUpdateLesson />
                        </div>
                        <div className={`optionSettings`}>
                            <p className={`descriptionOptionSettings`}>Update Ability</p>
                            <ButtonUpdateAbility />
                        </div>
                    </div>
                    <div className={`containerOptions`}>
                        <p>Delete section</p>
                        <div className={`optionSettings`}>
                            <p className={`descriptionOptionSettings`}>Delete Course</p>
                        </div>
                        <div className={`optionSettings`}>
                            <p className={`descriptionOptionSettings`}>Delete Lesson</p>
                        </div>
                        <div className={`optionSettings`}>
                            <p className={`descriptionOptionSettings`}>Delete Ability</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SettingsAdmin;
