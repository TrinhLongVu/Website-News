import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faEarth,
  faTags,
  faCircleInfo,
  faNewspaper,
} from "@fortawesome/free-solid-svg-icons";
import "./footer.css";

import { categoryList } from "../../../Global";
import { Link } from "react-router-dom";

const Footer = () => {
  const today = new Date();

  return (
    <footer>
      <div className="foot-content">
        <div className="foot-row">
          <div className="foot-left-section">
            <div className="foot-title">
              <div>
                <FontAwesomeIcon icon={faCircleInfo} className="ico" /> The Mega
                Papers
              </div>
            </div>
            <div className="foot-section-content" id="foot-mega-para">
              This is an innovative digital platform designed to revolutionize
              the way we consume and engage with news. Our Website creates a
              seamless online space where writers and readers can connect and
              interact around the news.
            </div>
          </div>
          <div className="foot-right-section">
            <div className="foot-title">
              <div>
                <FontAwesomeIcon icon={faTags} className="ico" /> Categories
              </div>
            </div>
            <div className="foot-section-content" id="foot-categories">
              {categoryList.map((category, idx) => (
                <Link to={category.link} key={idx}>
                  {category.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="foot-row">
          <div className="foot-left-section">
            <div className="foot-title">
              <div>
                <FontAwesomeIcon icon={faNewspaper} className="ico" />
                Newsletter
              </div>
            </div>
            <div className="foot-section-content">
              <form action="" className="mail-box">
                <input
                  type="email"
                  className="mail-input"
                  placeholder="Enter Your Email..."
                />
                <FontAwesomeIcon icon={faEnvelope} />
              </form>
            </div>
          </div>
          <div className="foot-right-section">
            <div className="foot-title">
              <div>
                <FontAwesomeIcon icon={faEarth} className="ico" /> Social
                Network
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="foot-banner">
        <div>
          <a href="/policy">Privacy Policy | Terms & Conditions</a>
        </div>
        <div>Copyright © The Mega Papers @ {today.getFullYear()}</div>
      </div>
    </footer>
  );
};

export default Footer;
