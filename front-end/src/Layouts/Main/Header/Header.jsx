import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
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

import { categoryList } from "../../../Global";

const Header = ({ userInfo, setUserInfo }) => {
  const navigate = useNavigate();
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

  const logOut = () => {
    fetch("http://localhost:8000/api/v1/user/account/logout", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.message === "Logout successful") {
          setUserInfo(null);
          navigate("/");
        }
      });
  };

  const search = () => {
    if (searchField === "") {
      navigate("/search/!@$");
    } else {
      navigate(`/search/${searchField}`);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      search();
    }
  };

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
                userInfo.following.map((follow, index) => (
                  <Link key={index} to={`/writer/${follow.id}`}>
                    <div
                      className="following-avt"
                      style={{
                        backgroundImage: `url(${follow.image})`,
                      }}
                    ></div>
                    <div className="following-name">{follow.name}</div>
                  </Link>
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
          onKeyDown={handleKeyPress}
        />
        <Link id="search-btn" onClick={search}>
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
                <Link onClick={logOut}>
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
