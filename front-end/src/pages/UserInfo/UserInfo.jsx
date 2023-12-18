import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import "./user-info.css";
import Breadcrumbs from "../../Components/Breadcrumbs/Breadcrumbs";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";

const UserInfo = () => {
  const [infoObj, setInfoObj] = useState({});
  const [userAvatar, setUserAvatar] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:8000/api/v1/user/account/success", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.body) {
          if (json.body.Birthday) {
            const dateObj = new Date(json.body.Birthday);
            const formattedDate = format(dateObj, "yyyy-MM-dd");
            json.body.Birthday = formattedDate;
          }
          setInfoObj(json.body);
          setUserAvatar(json.body.Image_Avatar);
          if (json.body.Role === "writer") {
            setWriter(true);
          }
        } else {
          navigate("/");
        }
      });
  }, [isEditMode]);

  const saveInfoChanges = () => {
    setIsEditMode(false);
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUserAvatar(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <Breadcrumbs crumbList={[{ name: "User Information", link: "/user" }]} />
      <div className="info-avt-container">
        <div className="info--avt">
          <div
            className="avatar-big"
            style={{ backgroundImage: `url(${userAvatar})` }}
          ></div>
          {isEditMode && (
            <>
              <label htmlFor="info--avt-upload" className="info--avt-change">
                <FontAwesomeIcon icon={faEdit} id="info--avt-edit" />
                Change Avatar
              </label>
              <input
                type="file"
                id="info--avt-upload"
                onChange={handleAvatarChange}
              />
            </>
          )}
        </div>

        <div className="info">
          <div className="info-field">
            <h3 className="title-input">Full Name</h3>
            <input
              className="info-inp"
              type="text"
              name="username"
              id="username"
              placeholder="No data"
              value={infoObj.FullName}
              readOnly={!isEditMode}
            />
          </div>
          <div className="info-field">
            <h3 className="title-input">Birthday</h3>
            <input
              className="info-inp"
              type="date"
              name="birthday"
              id="birthday"
              value={infoObj.Birthday}
              placeholder="No data"
              readOnly={!isEditMode}
            />
          </div>

          <div className="info-field">
            <h3 className="title-input">Gender</h3>
            <input
              className="info-inp"
              type="text"
              name="gender"
              id="gender"
              placeholder="No data"
              value={infoObj.Gender}
              readOnly={!isEditMode}
            />
          </div>

          <div className="info-field">
            <h3 className="title-input">Phone number</h3>
            <input
              className="info-inp"
              type="tel"
              name="phonenumber"
              id="phonenumber"
              placeholder="No data"
              value={infoObj.PhoneNumber}
              readOnly={!isEditMode}
            />
          </div>

          <div className="info-field">
            <h3 className="title-input">Address</h3>
            <input
              className="info-inp"
              type="text"
              name="address"
              id="address"
              placeholder="No data"
              value={infoObj.Address}
              readOnly={!isEditMode}
            />
          </div>
          <div className="info-action-row">
            <div className="info-action-btn-container">
              <div className="info-action-btn" id="info-upgrade-btn">
                Upgrade to Writer
              </div>
            </div>
            <div className="info-action-btn-container">
              {isEditMode ? (
                <>
                  <div
                    className="info-action-btn"
                    id="info-save-btn"
                    onClick={saveInfoChanges}
                  >
                    Save
                  </div>
                  <div
                    className="info-action-btn"
                    onClick={setIsEditMode.bind(null, false)}
                  >
                    Cancel
                  </div>
                </>
              ) : (
                <div
                  className="info-action-btn"
                  onClick={setIsEditMode.bind(null, true)}
                >
                  Change Information
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserInfo;
