import { linkedin_icon, facebook_icon, twitter_icon, logo} from "../../assets/frontend_assets/assets";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer-container">

        {/* Logo and Description */}
        <div className="footer-brand">
          <img
            src={logo}
            alt="Tomato Logo"
            className="footer-logo"
          />

          <p>
            Discover delicious meals made with fresh
            ingredients and delivered straight to your door.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>

          <a href="/">Home</a>
          <a href="#explore-menu">Menu</a>
          <a href="#app-download">Mobile App</a>
          <a href="#contact">Contact Us</a>
        </div>

        {/* Social Media */}
        <div className="footer-social">
          <h3>Follow Us</h3>

          <div className="footer-social-icons">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <img src={facebook_icon} alt="Facebook" />
            </a>

            <a
              href="https://x.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X / Twitter"
            >
              <img src={twitter_icon} alt="Twitter" />
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <img src={linkedin_icon} alt="LinkedIn" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Tomato.
          All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
