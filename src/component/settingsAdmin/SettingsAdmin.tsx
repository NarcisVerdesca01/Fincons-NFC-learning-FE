import Header from "../header/Header";
import updateImage from '../../assets/update_image.png'
import deleteImage from '../../assets/delet_img.png'
import createImage from '../../assets/add_image.png'
import associateImage from '../../assets/img_associate.jpg'
import "./SettingsAdmin.css";
import ButtonCreateAbility from "./buttonSettings/ButtonCreateAbility";
import ButtonCreateCourse from "./buttonSettings/ButtonCreateCourse";
import ButtonCreateLesson from "./buttonSettings/ButtonCreateLesson";
import ButtonUpdateAbility from "./buttonSettings/ButtonUpdateAbility";
import ButtonUpdateCourse from "./buttonSettings/ButtonUpdateCourse";
import ButtonUpdateLesson from "./buttonSettings/ButtonUpdateLesson";
import ButtonRegisterTutor from "./buttonSettings/ButtonRegisterTutor";
import ButtonDeleteCourse from "./buttonSettings/ButtonDeleteCourse";
import ButtonDeleteLesson from "./buttonSettings/ButtonDeleteLesson";
import ButtonDeleteAbility from "./buttonSettings/ButtonDeleteAbility";
import ButtonAssociateUserAbility from "./buttonSettings/ButtonAssociateUserAbility";
import ButtonAssociateCourseAbility from "./buttonSettings/ButtonAssociateCourseAbility";
import { url } from "inspector";

const SettingsAdmin = () => {
  return (
    <>
      <Header />
      <div className={`containerSettingsAdmin`}>
        <div className={`sectionContainer`}>
          <div className={`containerOptions`}>
            <p className={`textSettings`}>Create section</p>
            <div className={`containerImageSettings`}>
              <img src={createImage} alt="Create" className={`imageSettings`} />
            </div>
            <div className={`optionSettings`}>
              <ButtonCreateCourse />
              <ButtonCreateLesson />
              <ButtonCreateAbility />
              <ButtonRegisterTutor />
            </div>
          </div>
          <div className={`containerOptions`}>
            <p className={`textSettings`}>Associate section</p>
            <div className={`containerImageSettings`}>
              <img src={associateImage} alt="Associate"  className={`imageSettings`} />
            </div>
            <div className={`optionSettings`}>
              <ButtonAssociateUserAbility />
              <ButtonAssociateCourseAbility />
            </div>
          </div>
          <div className={`containerOptions`}>
            <p className={`textSettings`}>Update section</p>
            <div className={`containerImageSettings`}>
              <img src={updateImage} alt="Update"  className={`imageSettings`} />
            </div>
            <div className={`optionSettings`}>
              <ButtonUpdateCourse />
              <ButtonUpdateLesson />
              <ButtonUpdateAbility />
            </div>
          </div>
          <div className={`containerOptions`}>
            <p className={`textSettings`}>Delete section</p>
            <div className={`containerImageSettings`}>
              <img src={deleteImage} alt="Delete"  className={`imageSettings`} />
            </div>
            <div className={`optionSettings`}>
              <ButtonDeleteCourse />
              <ButtonDeleteLesson />
              <ButtonDeleteAbility />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingsAdmin;
