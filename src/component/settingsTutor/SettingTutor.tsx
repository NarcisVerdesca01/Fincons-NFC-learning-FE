import Header from "../header/Header";
import "./SettingsTutor.css";
import ButtonCreateAssociationCourseLesson from "./buttonSettingsTutor/ButtonCreateAssocationCourseLesson";
import CreateAssociationCourseLesson from "./createAssociationCourseLesson/CreateAssociationCourseLesson";

const SettingsTutor = () => {
  return (
    <>
      <Header />
      <div className={`containerSettingsTutor`}>
        <div>
          <h1>Settings </h1>
        </div>
        <div className={`optionSettingsQuiz`}>
          <div className={`containerOptions`}>
            <p className={`textCreate`}>Quiz section</p>
            <div className={`containerImageSettingsQuiz`}></div>
            <div className={`optionSettingsTutor`}>
              <button>create a quiz</button>
              <button>update a quiz</button>
            </div>
            <div className={`optionSettings`}>
              <button>delete a quiz</button>
            </div>
            <div className={`containerOptions`}>
              <p className={`textCreate`}>Associate section</p>
              <div className={`containerImageSettingsAssociate`}></div>
              <div className={`optionSettings`}>
                <p className={`descriptionOptionSettings`}>
                  Associate Course to Lesson
                </p>
                <ButtonCreateAssociationCourseLesson />
              </div>
              <div className={`optionSettings`}>
                <p className={`descriptionOptionSettings`}>
                  Associate Quiz to Student
                </p>
                <ButtonCreateAssociationCourseLesson />
              </div>
            </div>
            <div className={`optionSettings`}>
              <p className={`descriptionOptionSettings`}>Update a Lesson</p>
              <button>update</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingsTutor;
{
  /*<div className={`optionSettings`}>
          <p className={`descriptionOptionSettings`}>Update a Lesson</p>
        </div>*/
}
