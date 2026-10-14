import { app_store, play_store } from "../../assets/frontend_assets/assets";
import "./AppDownload.css";

const AppDownload = () => {
  return (
    <section className="app-download" id="app-download">
      <div className="app-download-content">
        <p className="app-download-subtitle">ORDER ANYTIME, ANYWHERE</p>

        <h2>
          For Better Experience
          <br />
          Download <span>Tomato</span> App
        </h2>

        <p className="app-download-description">
          Enjoy a faster and easier way to order your favorite meals.
          Download our app and get delicious food delivered right to your door.
        </p>

        <div className="app-download-platforms">
          <a href="#" aria-label="Download from App Store">
            <img src={app_store} alt="Download on the App Store" />
          </a>

          <a href="#" aria-label="Get it on Google Play">
            <img src={play_store} alt="Get it on Google Play" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default AppDownload;