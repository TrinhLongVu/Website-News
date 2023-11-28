import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import "./header.css";

const Header = () => {
  let notiNum = 0;
  return (
    <header>
      <a className="logo" href="#">
        THE MEGA PAPERS
      </a>
      <div className="list-shower-container">
        <div className="list-shower">
          Categories
          <FontAwesomeIcon icon={faAngleDown} />
        </div>
        <div className="list-shower">
          Pages
          <FontAwesomeIcon icon={faAngleDown} />
        </div>
      </div>
      <form action="" className="search-box">
        <input
          type="text"
          className="search-input"
          placeholder="Search Articles"
        />
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </form>
      <div className="noti">
        <div className="noti-bell">
          <FontAwesomeIcon icon={faBell} />
        </div>
        {notiNum > 0 && <div className="noti-num">{notiNum}</div>}
      </div>
      <div className="avatar"></div>
    </header>
  );
};

export default Header;
