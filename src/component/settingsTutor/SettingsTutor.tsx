import Header from "../header/Header";
import "./SettingsTutor.css";
import updateImage from "../../assets/update_image.png";
import deleteImage from "../../assets/delet_img.png";
import createImage from "../../assets/add_image.png";
import associateImage from "../../assets/img_associate.jpg";
import ButtonQuizResults from "./buttonSettingsTutor/ButtonQuizResults";
import ButtonCreateQuiz from "./buttonSettingsTutor/ButtonCreateQuiz";
import ButtonCreateQuestion from "./buttonSettingsTutor/ButtonCreateQuestion";
import ButtonCreateAnswer from "./buttonSettingsTutor/ButtonCreateAnswer";
import ButtonCreateContent from "./buttonSettingsTutor/ButtonCreateContent";
import ButtonUpdateQuiz from "./buttonSettingsTutor/ButtonUpdateQuiz";
import ButtonUpdateQuestion from "./buttonSettingsTutor/ButtonUpdateQuestion";
import ButtonUpdateAnswer from "./buttonSettingsTutor/ButtonUpdateAnswer";
import ButtonUpdateContent from "./buttonSettingsTutor/ButtonUpdateContent";
import Footer from "../footer/Footer";
import ButtonAssociationContentLesson from "./buttonSettingsTutor/ButtonAssociationContentLesson";
import ButtonAssociationCourseLesson from "./buttonSettingsTutor/ButtonAssociationCourseLesson";
import ButtonAssociationQuizLesson from "./buttonSettingsTutor/ButtonAssociationQuizLesson";
import ButtonAssociationQuestionAnswer from "./buttonSettingsTutor/ButtonAssociationQuestionAnswer";
import ButtonAssociationQuizQuestion from "./buttonSettingsTutor/ButtonAssociationQuizQuestion";
import ButtonDeleteQuiz from "./buttonSettingsTutor/ButtonDeleteQuiz";
import ButtonDeleteQuestion from "./buttonSettingsTutor/ButtonDeleteQuestion";
import ButtonDeleteAnswer from "./buttonSettingsTutor/ButtonDeleteAnswer";
import ButtonDeleteContent from "./buttonSettingsTutor/ButtonDeleteContent";

const SettingsTutor = () => {
    return (
        <>
            <Header />
            <div className={`containerSettingsTutor`}>
                <div className={`sectionContainer`}>
                    <div className={`containerOptions`}>
                        <p className={`textSettings`}>Create section</p>
                        <div className={`containerImageSettings`}>
                            <img src={createImage} alt="Create" className={`imageSettings`} />
                        </div>
                        <div className={`optionSettings`}>
                            <ButtonCreateQuiz />
                            <ButtonCreateQuestion />
                            <ButtonCreateAnswer />
                            <ButtonCreateContent />
                        </div>
                    </div>
                    <div className={`containerOptions`}>
                        <p className={`textSettings`}>Associate section</p>
                        <div className={`containerImageSettings`}>
                            <img
                                src={associateImage}
                                alt="Associate"
                                className={`imageSettings`}
                            />
                        </div>
                        <div className={`optionSettings`}>
                            <ButtonAssociationCourseLesson />
                            <ButtonAssociationContentLesson />
                            <ButtonAssociationQuizLesson />
                            <ButtonAssociationQuestionAnswer />
                            <ButtonAssociationQuizQuestion />
                        </div>

                        <div className={`containerOptions`}>
                            <p className={`textSettings`}>Update section</p>
                            <div className={`containerImageSettings`}>
                                <img src={updateImage} alt="Update" className={`imageSettings`} />
                            </div>
                            <div className={`optionSettings`}>
                                <ButtonUpdateQuiz />
                                <ButtonUpdateQuestion />
                                <ButtonUpdateAnswer />
                                <ButtonUpdateContent />
                            </div>
                        </div>
                        <div className={`containerOptions`}>
                            <p className={`textSettings`}>Delete section</p>
                            <div className={`containerImageSettings`}>
                                <img src={deleteImage} alt="Delete" className={`imageSettings`} />
                            </div>
                            <div className={`optionSettings`}>
                                <ButtonDeleteQuiz/>
                                <ButtonDeleteQuestion/>
                                <ButtonDeleteContent/>
                            </div>
                        </div>
                        <div className={`containerOptions`}>
                            <p className={`title-section-settings-tutor`}>View section</p>
                            <div className={`optionSettings`}>
                                <p className={`descriptionOptionSettings`}>View Result Quiz</p>
                                <ButtonQuizResults />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};
export default SettingsTutor;
