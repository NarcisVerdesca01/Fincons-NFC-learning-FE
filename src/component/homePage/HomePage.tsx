import "./HomePage.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";

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
            <a href="#whoWeAre">
              <button className={`buttonLegend`}>Who we are</button>
            </a>
            <a href="#whatIsIt">
              <button className={`buttonLegend`}>What is it</button>
            </a>
            <a href="#whatWeOffer">
              <button className={`buttonLegend`}>What we offer</button>
            </a>
          </div>
        </div>
        <div className={`containerWhoWeAre`} id="whoWeAre">
          <div className={`textWhoWeAre`}>
            <div className={`containerTitleWhoWeAre`}>
              <h3 className={`titleWhoWeAre`}>
                Welcome to our E-Learning web site
              </h3>
            </div>
            <div className={`containerDescriptionWhoWeAre`}>
              <p className={`descriptionWhoWeAre`}></p>
            </div>
          </div>
          <div className={`containerImgWhoWeAre`}></div>
        </div>
        <div className={`containerWhatIsIt`} id="whatIsIt">
          <div className={`containerImgWhatIsIt`}></div>
          <div className={`textWhatIsIt`}>
            <div className={`containerTitleWhatIsIt`}>
              <h3 className={`titleWhatIsIt`}>What is it?</h3>
            </div>
            <div className={`containerDescriptionWhatIsIt`}>
              <p className={`descriptionWhatIsIt`}>
                <h4 className={`descriptionTitleWhatWeOffer`}>
                  To explane it simply
                </h4>
                <p>
                  E-learning is spreading rapidly and in many cases has replaced
                  traditional training. There is, however, a very simple
                  question that anyone approaching this world should ask
                  themselves before any other: what is e-learning? <br></br>This
                  is distance learning. <br></br>The term e-learning was coined
                  in the late 1990s which described it as
                </p>
                <br></br>
                <h5 className={`descriptionTitleWhatWeOffer`}>
                  “the way network technology designs, distributes, selects,
                  administers and expands training”
                </h5>
                <br></br>
                <p>
                  E-learning therefore allows traditional learning systems to be
                  enriched using digital devices. Today E-learning has taken on
                  different shapes and dimensions, going beyond the boundaries
                  of the traditional sense of training. Its effectiveness is
                  recognized and the possibilities for always usable content are
                  constantly evolving.
                </p>
              </p>
            </div>
          </div>
        </div>
        <div className={`containerWhatWeOffer`} id="whatWeOffer">
          <div className={`textWhatWeOffer`}>
            <div className={`containerTitleWhatWeOffer`}>
              <h3 className={`titleWhatWeOffer`}>What we offer</h3>
            </div>
            <div className={`containerDescriptionWhatWeOffer`}>
              <p className={`descriptionWhatWeOffer`}>
                <h4 className={`descriptionTitleWhatWeOffer`}>
                  A single platform to manage and monitor your training courses!
                </h4>
                <p>
                  A website without complications. Designed to be used without
                  e-learning experience. Spend your time on what really matters
                  it matters.<br></br> Our e-learning system offers the
                  following basic features: <br></br>- be accessible via the
                  Internet, allowing distance courses to be attended; <br></br>-
                  provide learning paths based on textual and video multimedia
                  material;<br></br> - present quizzes to evaluate the learning
                  level.
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
