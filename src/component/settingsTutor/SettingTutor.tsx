import Header from "../header/Header";
import "./SettingsTutor.css";
import ButtonCreateAssociationCourseLesson from "./buttonSettingsTutor/ButtonCreateAssocationCourseLesson";
import CreateAssociationCourseLesson from "./createAssociationCourseLesson/CreateAssociationCourseLesson";



const SettingsTutor = () => {


    return (
        <>
            <Header />
            <div className={`containerSettings`}>
                <div>
                    <h1>Settings </h1>
                </div>
                <div className={`optionSettings`}>
                    <p  className={`descriptionOptionSettings`}>Associate Course to Lesson</p>
                    <ButtonCreateAssociationCourseLesson />
                </div>
{/*               <div className={`optionSettings`}>
                    <p  className={`descriptionOptionSettings`}>Associate Content to Lesson</p>
                    <ButtonCreateAssociationCourseLesson />
    </div>*/}
                
            </div>
        </>
    );
};

export default SettingsTutor;
