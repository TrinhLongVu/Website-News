import { useState, useRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faMagnifyingGlass,
  faUser,
  faRightFromBracket,
  faBookmark,
} from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import "./header.css";

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

  const following = {
    username: "Simon",
    avatar: "https://i.pravatar.cc/300",
  };
  const following_list = [
    following,
    following,
    following,
    following,
    following,
  ];

  const userInfo = {
    username: "Simon",
    avatar: "https://i.pravatar.cc/301",
  };

  let notiNum = 0;
  return (
    <header>
      <a className="logo" href="#">
        THE MEGA PAPERS
      </a>
      <div className="list-shower-container">
        <div className="list-shower">
          <div
            className="list-shower-title"
            onMouseEnter={openCategoriesDropdown}
            onMouseLeave={closeCategoriesDropdown}
          >
            <a href="">Categories</a>
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
              <a href="">Culture</a>
              <a href="">Food</a>
              <a href="">Art</a>
              <a href="">Technology</a>
              <a href="">Fashion</a>
              <a href="">Health</a>
              <a href="">Sport</a>
              <a href="">Movies</a>
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
              {following_list.length > 0 ? (
                following_list.map((following, index) => (
                  <a key={index} href="">
                    <div
                      className="following-avt"
                      style={{ backgroundImage: `url(${following.avatar})` }}
                    ></div>
                    {following.username}
                  </a>
                ))
              ) : (
                <div id="no-following">You haven't following any author</div>
              )}
            </div>
          )}
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
      <div
        className="avt-dropdown-btn"
        style={{ backgroundImage: `url(${userInfo.avatar})` }}
        onClick={showAvatarDropdown}
      >
        {showAvtDropdown && (
          <div className="dropdown-menu" id="avt-dropdown">
            <a href="">
              <FontAwesomeIcon icon={faUser} className="profile-ico" />
              Profile
            </a>
            <a href="">
              <FontAwesomeIcon icon={faBookmark} className="profile-ico" />
              Saved
            </a>
            <hr />
            <a href="">
              <FontAwesomeIcon
                icon={faRightFromBracket}
                className="profile-ico"
              />
              Sign out
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
