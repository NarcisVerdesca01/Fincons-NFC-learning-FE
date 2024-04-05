import Header from "../header/Header";
import associateImage from "../../assets/img_associate.jpg";
import Footer from "../footer/Footer";
import AssociationAbilityUser from "./user_ability/AssociationUserAbility";

const SettingsTutor = () => {
    return (
        <>
            <Header />
            <div className={`containerSettingsTutor`}>
                <div className={`sectionContainer`}>
                    <div className={`cardOptions`}>
                        <div className={`containerOptions`}>
                            <div className={`cardFront`}>
                                <p className={`textSettings`}>Associate section</p>
                                <div className={`containerImageSettings`}>
                                    <img src={associateImage} alt="Associate" className={`imageSettings`} />
                                </div>
                            </div>
                            <div className={`cardBack`}>
                                <div className={`optionSettings`}>
                                    <AssociationAbilityUser />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <Footer />
        </>
    );
};
export default SettingsTutor;
