import Header from "../header/Header";
import "./SettingsTutor.css";
import updateImage from "../../assets/update_image.png";
import deleteImage from "../../assets/delet_img.png";
import createImage from "../../assets/add_image.png";
import associateImage from "../../assets/img_associate.jpg";
import ButtonQuizResults from "./buttonSettingsTutor/ButtonQuizResults";
import ButtonCreateQuiz from "./buttonSettingsTutor/ButtonCreateQuiz"
import ButtonCreateQuestion from "./buttonSettingsTutor/ButtonCreateQuestion";
import ButtonCreateAnswer from "./buttonSettingsTutor/ButtonCreateAnswer";
import ButtonCreateContent from "./buttonSettingsTutor/ButtonCreateContent";
import ButtonUpdateQuiz from "./buttonSettingsTutor/ButtonUpdateQuiz";
import ButtonUpdateQuestion from "./buttonSettingsTutor/ButtonUpdateQuestion";
import ButtonUpdateAnswer from "./buttonSettingsTutor/ButtonUpdateAnswer";
import ButtonUpdateContent from "./buttonSettingsTutor/ButtonUpdateContent";
<<<<<<< HEAD
import Footer from "../footer/Footer";
import ButtonAssociationContentLesson from "./buttonSettingsTutor/ButtonAssocationContentLesson";
import ButtonAssociationCourseLesson from "./buttonSettingsTutor/ButtonAssocationCourseLesson";
import ButtonAssociationQuizLesson from "./buttonSettingsTutor/ButtonAssocationQuizLesson";
import ButtonAssociationQuestionAnswer from "./buttonSettingsTutor/ButtonAssociationQuestionAnswer";
import ButtonAssociationQuizQuestion from "./buttonSettingsTutor/ButtonAssociationQuizQuestion";
=======
import updateImage from "../../assets/update_image.png";
import deleteImage from "../../assets/delet_img.png";
import createImage from "../../assets/add_image.png";
import ButtonDeleteQuiz from "./buttonSettingsTutor/ButtonDeleteQuiz";
>>>>>>> 021ea2b (Adding status response)

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
<<<<<<< HEAD
=======

                        <div className={`optionSettings`}>
                            <p className={`descriptionOptionSettings`}>Associate Quiz to Lesson</p>
                            <ButtonCreateAssociationQuizLesson />
                        </div>

                        <div className={`optionSettings`}>
                            <p className={`descriptionOptionSettings`}>Associate Question to Answer</p>
                            <ButtonCreateAssociationQuestionAnswer />
                        </div>

                        <div className={`optionSettings`}>
                            <p className={`descriptionOptionSettings`}>Associate Question to Quiz</p>
                            <ButtonCreateAssociationQuizQuestion />
                        </div>


>>>>>>> 021ea2b (Adding status response)
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
<<<<<<< HEAD
=======

                    <div className={`containerOptions`}>
                        <p>Delete section</p>
                        <div className={`optionSettings`}>
                            <p className={`descriptionOptionSettings`}>Delete Quiz</p>
                            <ButtonDeleteQuiz />
                        </div>
                        <div className={`optionSettings`}>
                            <p className={`descriptionOptionSettings`}>Update Question</p>
                            <ButtonUpdateQuestion />
                        </div>
                        <div className={`optionSettings`}>
                            <p className={`descriptionOptionSettings`}>Update Answer</p>
                            <ButtonUpdateAnswer />
                        </div>
                        <div className={`optionSettings`}>
                            <p className={`descriptionOptionSettings`}>Update Content</p>
                            <ButtonUpdateContent />
                        </div>
                    </div>

                   

>>>>>>> 021ea2b (Adding status response)
                    <div className={`containerOptions`}>
                        <p className={`textSettings`}>Delete section</p>
                        <div className={`containerImageSettings`}>
                            <img src={deleteImage} alt="Delete" className={`imageSettings`} />
                        </div>
                        <div className={`optionSettings`}>
                        </div>
                    </div>
                    <div className={`containerOptions`}>
                        <p className={`title-section-settings-tutor`}>View section</p>
                        <p className={`title-section-settings-tutor`}>View section</p>
                        <div className={`optionSettings`}>
                            <p className={`descriptionOptionSettings`}>View Result Quiz</p>
                            <ButtonQuizResults />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};
export default SettingsTutor;