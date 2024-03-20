import Header from "../header/Header";
import "./SettingsAdmin.css";
import ButtonCreateAbility from "./buttonSettings/ButtonCreateAbility";
import ButtonCreateCourse from "./buttonSettings/ButtonCreateCourse";
import ButtonCreateLesson from "./buttonSettings/ButtonCreateLesson";
import ButtonUpdateAbility from "./buttonSettings/ButtonUpdateAbility";
import ButtonUpdateCourse from "./buttonSettings/ButtonUpdateCourse";
import ButtonUpdateLesson from "./buttonSettings/ButtonUpdateLesson";
import ButtonRegisterTutor from "./buttonSettings/ButtonRegisterTutor";
import ButtonAssociate from "./buttonSettings/ButtonAssociateCourseAbility";
import ButtonDeleteCourse from "./buttonSettings/ButtonDeleteCourse";
import ButtonDeleteLesson from "./buttonSettings/ButtonDeleteLesson";
import ButtonDeleteAbility from "./buttonSettings/ButtonDeleteAbility";
import ButtonAssociateUserAbility from "./buttonSettings/ButtonAssociateUserAbility";
import ButtonAssociateCourseAbility from "./buttonSettings/ButtonAssociateCourseAbility";

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
            <p className={`text`}>Create section</p>
            <div className={`containerImageSettingsCreate`}></div>
            <div className={`optionSettings`}>
              <ButtonCreateCourse />
              <ButtonCreateLesson />
            </div>
            <div className={`optionSettings`}>
              <ButtonCreateAbility />
              <ButtonRegisterTutor />
            </div>
          </div>
          <div className={`containerOptions`}>
            <p className={`text`}>Associate section</p>
            <div className={`containerImageSettingsAssociate`}></div>
            <div className={`optionSettings`}>
              <ButtonAssociateUserAbility />
            </div>
            <div className={`optionSettings`}>
              <ButtonAssociateCourseAbility />
            </div>

            <div className={`optionSetting`}></div>
          </div>
          <div className={`containerOptions`}>
            <p className={`text`}>Update section</p>
            <div className={`containerImageSettingsUpdate`}></div>
            <div className={`optionSettings`}>
              <ButtonUpdateCourse />
              <ButtonUpdateLesson />
            </div>
            <div className={`optionSettings`}>
              <ButtonUpdateAbility />
            </div>
          </div>
          <div className={`containerOptions`}>
            <p className={`text`}>Delete section</p>
            <div className={`containerImageSettingsDelete`}></div>
            <div className={`optionSettings`}>
              <ButtonDeleteCourse />
              <ButtonDeleteLesson />
            </div>
            <div className={`optionSettings`}>
              <ButtonDeleteAbility />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingsAdmin;
