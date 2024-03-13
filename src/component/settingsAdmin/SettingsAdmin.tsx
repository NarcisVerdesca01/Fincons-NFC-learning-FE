import { useNavigate } from "react-router";
import Header from "../header/Header";
import "./SettingsAdmin.css";
import ButtonCreateAbility from "./buttonSettings/ButtonCreateAbility";
import ButtonCreateCourse from "./buttonSettings/ButtonCreateCourse";
import ButtonCreateLesson from "./buttonSettings/ButtonCreateLesson";
import ButtonUpdateAbility from "./buttonSettings/ButtonUpdateAbility";
import ButtonUpdateCourse from "./buttonSettings/ButtonUpdateCourse";
import ButtonUpdateLesson from "./buttonSettings/ButtonUpdateLesson";
import ButtonRegisterTutor from "./buttonSettings/ButtonRegisterTutor";
import ButtonAssociate from "./buttonSettings/ButtonAssociate";
import ButtonDeleteCourse from "./buttonSettings/ButtonDeleteCourse";
import ButtonDeleteLesson from "./buttonSettings/ButtonDeleteLesson";
import ButtonDeleteAbility from "./buttonSettings/ButtonDeleteAbility";

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
            <p className={`textCreate`}>Create section</p>
            <div className={`containerImageSettingsCreate`}></div>
            <div className={`optionSettingsCreate`}>
              <div>
                <ButtonCreateCourse />
                <ButtonCreateLesson />
              </div>
            </div>
            <div className={`optionSettingsCreate`}>
              <div>
                <ButtonCreateAbility />
                <ButtonRegisterTutor />
              </div>
            </div>
          </div>
          <div className={`containerOptions`}>
            <p className={`textCreate`}>Associate section</p>
            <div className={`containerImageSettingsAssociate`}></div>
            <div className={`optionSettingsAssociate`}>
              <div>
                <ButtonAssociate />
                <ButtonAssociate />
              </div>
            </div>
            <div className={`optionSettingsAssociate`}>
              <div>
                <ButtonAssociate />
              </div>
            </div>
          </div>
          <div className={`containerOptions`}>
            <p className={`textCreate`}>Update section</p>
            <div className={`containerImageSettingsUpdate`}></div>
            <div className={`optionSettingsUpdate`}>
              <ButtonUpdateCourse />
            </div>
            <div className={`optionSettings`}>
              <ButtonUpdateLesson />
            </div>
            <div className={`optionSettings`}>
              <ButtonUpdateAbility />
            </div>
          </div>
          <div className={`containerOptions`}>
            <p className={`textCreate`}>Delete section</p>
            <div className={`containerImageSettingsDelete`}></div>
            <div className={`optionSettingsDelete`}>
              <ButtonDeleteCourse />
            </div>
            <div className={`optionSettings`}>
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
