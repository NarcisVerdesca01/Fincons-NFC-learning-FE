import './HomePage.css';
import Header from '../header/Header';

const HomePage = () => {


    return (
        <>
                <Header />
                <div className={`bodyHomePage`}>
                    <div className={`containerLegend`}>
                        <div className={`containerTitleLegend`}>
                            <h2 className={`titleLegend`}>Legend</h2>
                        </div>
                        <div className={`containerButtonLegend`}>
                            <a href="#whoWeAre"><button className={`buttonLegend`}>Who we are</button></a>
                            <a href="#"><button className={`buttonLegend`}>What is it</button></a>
                            <a href="#"><button className={`buttonLegend`}>What we offer</button></a>
                        </div>
                    </div>
                    <div className={`containerWhoWeAre`} id="whoWeAre">
                        <div className={`textWhoWeAre`}>
                            <div className={`containerTitleWhoWeAre`}>
                                <h3 className={`titleWhoWeAre`}>
                                    Welcome to our E-Learning web site.
                                </h3>
                            </div>
                            <div className={`containerDescriptionWhoWeAre`}>
                                <p className={`descriptionWhoWeAre`}>
                                    To explane it simply: it is a website that organizes and offers educational content and tools for distance learning of student.<br /> A sort of virtual place/deposit that collects teaching materials and activities: document, video lessons and end-of-course tests.
                                </p>
                            </div>

                        </div>
                        <div className={`containerImgWhoWeAre`}>
                        </div>
                    </div>

                </div>

            
        </>
    );
};

export default HomePage;