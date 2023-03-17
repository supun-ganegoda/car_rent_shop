import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="footer-logo">
          <img src="../images/logo.png" alt="logo" />
        </div>
        <div className="footer-links">
          <Link to="/about-us">
            <b>About us</b>
          </Link>
          <Link to="/privacy-policy">
            <b>Privacy policy</b>
          </Link>
          <Link to="/terms-conditions">
            <b>Terms & Conditions</b>
          </Link>
        </div>
        <div className="footer-contact">
          <div className="footer-address">
            <p>
              <b>Car Rental Shop,</b>
              <br />
              Pahanwatta 2 Division,
              <br />
              Dodangoda,
              <br />
              Kaluthara
            </p>
          </div>
          <div className="footer-contact">
            <p>
              <b>Tel:</b>+9434 2281 896
              <br />
              <b>Fax:</b>+9434 2243 124
            </p>
          </div>
        </div>
        <div className="footer-social">
          <img src="../images/fb.svg"></img>
          <img src="../images/insta.svg"></img>
          <img src="../images/youtube.svg"></img>
        </div>
      </div>
    </>
  );
};
export default Footer;
