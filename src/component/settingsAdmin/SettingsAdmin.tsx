import Header from "../header/Header";
import "./SettingsAdmin.css";
import ButtonCreateAbility from "./buttonSettings/ButtonCreateAbility";
import ButtonCreateCourse from "./buttonSettings/ButtonCreateCourse";
import ButtonCreateLesson from "./buttonSettings/ButtonCreateLesson";
import { useNavigate } from "react-router-dom";

const SettingsAdmin = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  return (
    <>
      <Header />
      <div className={`containerSettingsAdmin`}>
        <div>
          <h1>Settings </h1>
        </div>
        <div className={`containerButtonBack`}>
          <button className={`buttonBack`} onClick={goBack}>
            <i className="bi bi-arrow-left"></i>
          </button>
        </div>
        <div className={`optionSettings`}>
          <p className={`descriptionOptionSettings`}>Create Course</p>
          <ButtonCreateCourse />
        </div>
        <div className={`optionSettings`}>
          <p className={`descriptionOptionSettings`}>Create Lesson</p>
          <ButtonCreateLesson />
        </div>
      </div>
    </>
  );
};

export default SettingsAdmin;
