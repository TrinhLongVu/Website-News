import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./writer.css";
import { faBan, faUserPlus } from "@fortawesome/free-solid-svg-icons";

const Writer = () => {
  return (
    <>
      <div className="writer-banner">
        <div className="writer-banner-info">
          <div className="writer-banner-avt"></div>
          <div className="writer-banner-detail">
            <div className="writer-banner-name">Simon Gin</div>
            <div className="writer-banner-follow-num">1863 Followers</div>
          </div>
        </div>
        <div className="writer-banner-action">
          <div className="writer-banner-btn" id="writer-follow">
            <FontAwesomeIcon icon={faUserPlus} />
          </div>
          <div className="writer-banner-btn" id="writer-ban">
            <FontAwesomeIcon icon={faBan} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Writer;
