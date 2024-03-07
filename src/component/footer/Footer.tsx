import "../footer/Footer.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Footer = () => {
  return (
    <div className={`row m-0 footer-style`}>
      <div className={`footer-text`}>
        <div className={`container`}>
          <div className="row">
            <div className={`col text-center`}>
              <h4>Follow us on the social media</h4>
              <div>
                <p>
                  Instagram <i className={`bi bi-instagram`}></i>
                </p>

                <p>
                  Twitter <i className={`bi bi-twitter-x`}></i>
                </p>
                <p>
                  Facebook <i className={`bi bi-facebook`}></i>
                </p>
              </div>
            </div>
            <div className={`col text-center`}>
              <h4>Contacts</h4>
              <div>
                <p>
                  Telephone <i className={`bi bi-telephone`}></i>
                  <br></br>+39 000 000 00 00
                </p>
                <p>
                  Email <i className={`bi bi-envelope`}></i>
                  <br></br>example.example@finconsgroup.com
                </p>
              </div>
            </div>
            <div className={`col text-center`}>
              <h4>Team</h4>
              <div>
                <p>
                  NFC E-LEARNING TEAM <i className={`bi bi-people`}></i>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
