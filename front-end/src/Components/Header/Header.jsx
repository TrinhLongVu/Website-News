import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faMagnifyingGlass,
  faUser,
  faRightFromBracket,
  faBookmark,
  faRightToBracket,
  faPen,
  faNewspaper,
} from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import "./header.css";

import { categoryList } from "../../Global";

const Header = () => {
  const timeoutRef = useRef(null);

  const [showCategoriesDropdown, setShowCategoriesDropdown] = useState(false);
  const [showFollowingDropdown, setShowFollowingDropdown] = useState(false);
  const [showAvtDropdown, setShowAvtDropdown] = useState(false);

  const openCategoriesDropdown = () => {
    clearTimeout(timeoutRef.current);
    setShowCategoriesDropdown(true);
    setShowFollowingDropdown(false);
  };

  const closeCategoriesDropdown = () => {
    timeoutRef.current = setTimeout(() => {
      setShowCategoriesDropdown(false);
    }, 100);
  };

  const openFollowingDropdown = () => {
    clearTimeout(timeoutRef.current);
    setShowFollowingDropdown(true);
    setShowCategoriesDropdown(false);
  };

  const closeFollowingDropdown = () => {
    timeoutRef.current = setTimeout(() => {
      setShowFollowingDropdown(false);
    }, 100);
  };

  const showAvatarDropdown = () => {
    setShowAvtDropdown(!showAvtDropdown);
  };

  document.body.addEventListener("click", () => {
    if (!event.target.closest(".avt-dropdown-btn")) {
      setShowAvtDropdown(false);
    }
  });

  const [searchField, setSearchField] = useState("");
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    fetch("http://localhost:8000/api/v1/user/account/success", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.body) {
          setUserInfo(json.body);
        } else {
          setUserInfo(null);
        }
      });
  }, []);

  return (
    <header>
      <Link to="/" className="logo">
        THE MEGA PAPERS
      </Link>
      <div className="list-shower-container">
        <div className="list-shower">
          <div
            className="list-shower-title"
            onMouseEnter={openCategoriesDropdown}
            onMouseLeave={closeCategoriesDropdown}
          >
            <Link to="/categories">Categories</Link>
            <div className="dropdown-ico">
              <FontAwesomeIcon icon={faAngleDown} />
            </div>
          </div>
          {showCategoriesDropdown && (
            <div
              className="dropdown-menu left-dropdown"
              onMouseEnter={openCategoriesDropdown}
              onMouseLeave={closeCategoriesDropdown}
            >
              {categoryList.map((category, index) => (
                <Link to={category.link} key={index}>
                  {category.name}
                </Link>
              ))}
            </div>
          )}
        </div>
        <div className="list-shower">
          <div
            className="list-shower-title"
            onMouseEnter={openFollowingDropdown}
            onMouseLeave={closeFollowingDropdown}
          >
            Following
            <div className="dropdown-ico">
              <FontAwesomeIcon icon={faAngleDown} />
            </div>
          </div>
          {showFollowingDropdown && (
            <div
              className="dropdown-menu left-dropdown"
              onMouseEnter={openFollowingDropdown}
              onMouseLeave={closeFollowingDropdown}
              id="following-dropdown"
            >
              {!userInfo ? (
                <div id="no-following">You haven't logged in yet!!!</div>
              ) : userInfo.ID_follow_writer.length === 0 ? (
                <div id="no-following">You haven't following any author</div>
              ) : (
                userInfo.ID_follow_writer.map((following, index) => (
                  <a key={index} href="">
                    <div
                      className="following-avt"
                      style={{
                        backgroundImage: `url(https://i.pravatar.cc/300)`,
                      }}
                    ></div>
                    <div className="following-name">{following}</div>
                  </a>
                ))
              )}
            </div>
          )}
        </div>
      </div>
      <div className="search-box">
        <input
          type="text"
          onChange={(e) => setSearchField(e.target.value)}
          className="search-input"
          placeholder="Search Articles"
        />
        <Link to={`/search/${searchField}`} id="search-btn">
          <FontAwesomeIcon icon={faMagnifyingGlass} id="search-ico" />
        </Link>
      </div>
      {userInfo ? (
        <>
          <div className="noti">
            <div className="noti-bell">
              <FontAwesomeIcon icon={faBell} />
            </div>
          </div>
          <div
            className="avt-dropdown-btn"
            style={{ backgroundImage: `url(${userInfo.Image_Avatar})` }}
            onClick={showAvatarDropdown}
          >
            {showAvtDropdown && (
              <div className="dropdown-menu" id="avt-dropdown">
                <Link to="/user">
                  <FontAwesomeIcon icon={faUser} className="profile-ico" />
                  Profile
                </Link>
                <Link to="/user/saved">
                  <FontAwesomeIcon icon={faBookmark} className="profile-ico" />
                  Saved
                </Link>
                {userInfo.Role === "writer" && (
                  <>
                    <Link to="/user/write">
                      <FontAwesomeIcon icon={faPen} className="profile-ico" />
                      Write
                    </Link>
                    <Link to="/user/written">
                      <FontAwesomeIcon
                        icon={faNewspaper}
                        className="profile-ico"
                      />
                      Written
                    </Link>
                  </>
                )}
                <hr />
                <Link>
                  <FontAwesomeIcon
                    icon={faRightFromBracket}
                    className="profile-ico"
                  />
                  Sign out
                </Link>
              </div>
            )}
          </div>
        </>
      ) : (
        <Link to="/authentication/login" className="head-login-btn">
          LOGIN
          <FontAwesomeIcon icon={faRightToBracket} className="head-login-ico" />
        </Link>
      )}
    </header>
  );
};

export default Header;
