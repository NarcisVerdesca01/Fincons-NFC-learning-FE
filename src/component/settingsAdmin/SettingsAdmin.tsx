import Header from "../header/Header";
import "./SettingsAdmin.css";
import ButtonCreateAbility from "./buttonSettings/ButtonCreateAbility";
import ButtonCreateCourse from "./buttonSettings/ButtonCreateCourse";
import ButtonCreateLesson from "./buttonSettings/ButtonCreateLesson";


const SettingsAdmin = () => {


    return (
        <>
            <Header />
            <div className={`containerSettingsAdmin`}>
                <div>
                    <h1>Settings </h1>
                </div>
                <div className={`optionSettings`}>
                    <p className={`descriptionOptionSettings`}>Create Course</p>
                    <ButtonCreateCourse />
                </div>
                <div className={`optionSettings`}>
                    <p  className={`descriptionOptionSettings`}>Create Lesson</p>
                    <ButtonCreateLesson />
                </div>
                <div className={`optionSettings`}>
                    <p  className={`descriptionOptionSettings`}>Create Lesson</p>
                    <ButtonCreateAbility />
                </div>
                
            </div>
        </>
    );
};

export default SettingsAdmin;
