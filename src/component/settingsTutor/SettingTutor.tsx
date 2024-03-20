import Header from "../header/Header";
import "./SettingsTutor.css";
import ButtonCreateAssociationCourseLesson from "./buttonSettingsTutor/ButtonCreateAssocationCourseLesson";
import ButtonCreateQuiz from "./buttonSettingsTutor/ButtonCreateQuiz";
import CreateAssociationCourseLesson from "./createAssociationCourseLesson/CreateAssociationCourseLesson";
import CreateQuiz from "./createQuizTutor/CreateQuiz";



const SettingsTutor = () => {


    return (
        <>
            <Header />
            <div className={`containerSettingsTutor`}>
                <div>
                    <h1>Settings </h1>
                </div>

                <div className={`sectionContainer`}>
                    <div className={`containerOptions`}>
                        <p>Create section</p>
                        <div className={`optionSettings`}>
                            <p className={`descriptionOptionSettings`}>Create Quiz</p>
                            <ButtonCreateQuiz />
                        </div>
                    </div>

                    <div className={`containerOptions`}>
                        <p>Associate section</p>
                        <div className={`optionSettings`}>
                            <p className={`descriptionOptionSettings`}>Associate Course to Lesson</p>
                            <ButtonCreateAssociationCourseLesson />
                        </div>
                        <div className={`optionSettings`}>
                            <p className={`descriptionOptionSettings`}>Associate Quiz to Lesson</p>
                            <ButtonCreateAssociationCourseLesson />
                        </div>
                    </div>
                
                
                
                </div>


               
               
                










            </div>



        </>
    );
};

export default SettingsTutor;
