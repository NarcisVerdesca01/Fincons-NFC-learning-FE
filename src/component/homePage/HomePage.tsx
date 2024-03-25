import "./HomePage.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const HomePage = () => {
  return (
    <>
      <Header />
      <div className={`bodyHomePage container`}>
        <div className={`containerLegend`}>
          <div className={`containerTitleLegend`}>
            <h2 className={`display-6 font-weight-bold `}>Legend</h2>
          </div>
          <div className={`containerButtonLegend`}>
            <a href="#whoWeAre">
              <button className={`buttonLegend`}>Who we are !</button>
            </a>
            <a href="#whatIsIt">
              <button className={`buttonLegend`}>What is it ?</button>
            </a>
            <a href="#whatWeOffer">
              <button className={`buttonLegend`}>What we offer !</button>
            </a>
          </div>
        </div>
        <div className={`containerSectionHome`} id="whoWeAre">
          <div className={`textSectionHome`}>
            <div className={`containerTitleSection`}>
              <h3 className="descriptionTitleSection  display-3 font-weight-bold ">
                Welcome to our E-Learning web site
              </h3>
            </div>
            <div className={`containerDescription`}>
              <p className={`descriptionSection`}>
                <h4 className={` display-4 font-weight-bold `}>Who we are !</h4>
                <p className="fw-light">
                  The NFC Team has consistently championed innovative training methods to provide a comprehensive and effective learning experience. We are interns at Fincons Group, and our platform is structured into multiple levels to deliver useful and impactful content.{" "}
                  <br></br>
                  Innovation has moved and continues to move across all learning
                  areas with the aim of looking at possible technological
                  innovations including:
                </p>
                <h4 className={`descriptionTitleSection lead `}>
                  E-Learning platforms.
                </h4>
              </p>
            </div>
          </div>
          <div className={`containerImgWhoWeAre`}></div>
        </div>
        <div className={`containerSectionHome`} id="whatIsIt">
          <div className={`containerImgWhatIsIt`}></div>
          <div className={`textSectionHome`}>
            <div className={`containerTitleSection`}>
              <h3 className={`titleSection display-4`}>What is it ?</h3>
            </div>
            <div className={`containerDescriptionWhatIsIt`}>
              <p className={`descriptionSection`}>
                <h4 className={`descriptionTitleSection display-5 font-weight-bold `}>
                  To explane it simply
                </h4>
                <p className="fw-light">
                  E-learning is rapidly expanding and, in many cases,
                  has replaced traditional training methods. However,
                  before delving into this world, it's crucial to ask a
                  fundamental question: what exactly is e-learning?
                  In essence, e-learning refers to distance learning. The term itself was coined in the late 1990s,
                  describing it as:
                </p>
                <h5 className={`descriptionTitleSection `}>
                  “the way network technology designs, distributes, selects,
                  administers and expands training”
                </h5>
                <br></br>
                <p className="fw-light">
                  Essentially, e-learning utilizes digital devices to enhance traditional learning systems.
                  Today, e-learning has evolved into various forms and dimensions, extending beyond the boundaries
                  of traditional training methods. Its effectiveness is widely recognized, and the potential for
                  continuously improving and accessible content is constantly expanding.
                </p>
              </p>
            </div>
          </div>
        </div>
        <div className={`containerSectionHome`} id="whatWeOffer">
          <div className={`textSectionHome`}>
            <div className={`containerTitleSection`}>
              <h3 className={`titleSection display-4 font-weight-bold`}>What we offer !</h3>
            </div>
            <div className={`containerDescription`}>
              <p className={`descriptionSection`}>
                <h4 className={`descriptionTitleSection`}>
                  A single platform to manage and monitor your training courses!
                </h4>
                <p className="fw-light">
                  A user-friendly website. Designed for those without prior e-learning experience.
                  Spend your time on what truly matters.<br></br> Our e-learning system offers the following key features:
                  <br></br>- Accessibility via the Internet, enabling participation in distance courses; <br></br>-
                  Learning paths comprised of textual and video-based multimedia content;<br></br>-
                  Quizzes to assess learning progress.
                </p>
              </p>
            </div>
          </div>
          <div className={`containerImgWhatWeOffer`}></div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
