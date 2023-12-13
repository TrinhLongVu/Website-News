import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import "./user-info.css";
import Breadcrumbs from "../../Components/Breadcrumbs/Breadcrumbs";

const UserInfo = () => {
  const [infoObj, setInfoObj] = useState({});
  const [userAvatar, setUserAvatar] = useState(null);
  const [isWriter, setWriter] = useState(false);

  useEffect(() => {
    fetch("http://localhost:8000/api/v1/user/account/success", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.body) {
          console.log(json.body);
          setInfoObj(json.body);
          setUserAvatar(json.body.Image_Avatar);
          if (json.body.Role === "writer") {
            setWriter(true);
          }
        }
      });
  }, []);

  const [isEditMode, setIsEditMode] = useState(false);
  const [formData, setFormData] = useState({
    username: "Simon",
    email: "sg@gmail.com",
    bio: "Hi everyone, this is the bio of my account",
    birthday: "",
    gender: "",
    phonenumber: "",
    address: "",
  });

  const initialFormData = useRef({ ...formData });

  const handleEditClick = () => {
    setIsEditMode(true);
  };

  const handleSaveClick = () => {
    initialFormData.current = { ...formData };
    setIsEditMode(false);
  };

  const handleCancelClick = () => {
    setFormData({ ...initialFormData.current });
    setIsEditMode(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
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
      <Breadcrumbs crumbList={[{ name: "User Info", link: "/user" }]} />
      <div className="info-avt-container">
        <div className="avt">
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
          {isEditMode ? (
            <></>
          ) : (
            <div
              className="action-btn change-info-btn"
              onClick={handleEditClick}
            >
              Change Information
            </div>
          )}

          <h1 className="account-title">Account Information</h1>

          <div className="info-field">
            <h3 className="title-input">Username</h3>
            <input
              className="info-inp"
              type="text"
              name="username"
              id="username"
              value={infoObj.FullName}
              readOnly={!isEditMode}
              onChange={handleChange}
            />
          </div>

          <div className="info-field">
            <h3 className="title-input">Email</h3>
            <input
              className="info-inp"
              type="email"
              name="email"
              id="email"
              value={infoObj.UserName}
              readOnly={!isEditMode}
              onChange={handleChange}
            />
          </div>

          <div className="info-field">
            <h3 className="title-input">Bio</h3>
            <textarea
              className="bio-inp"
              name="bio"
              id="bio"
              value={formData.bio}
              readOnly={!isEditMode}
              cols="30"
              rows="10"
              onChange={handleChange}
            ></textarea>
          </div>

          <h1 className="personal-title">Personal Information</h1>

          <div className="info-field">
            <h3 className="title-input">Birthday</h3>
            <input
              className="info-inp"
              type="date"
              name="birthday"
              id="birthday"
              placeholder="No data"
              value={formData.birthday}
              readOnly={!isEditMode}
              onChange={handleChange}
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
              onChange={handleChange}
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
              onChange={handleChange}
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
              onChange={handleChange}
            />
          </div>

          {isEditMode ? (
            <>
              <div className="save-cancel-btn-container">
                <button
                  className="action-btn save-btn"
                  onClick={handleSaveClick}
                >
                  Save
                </button>
                <button
                  className="action-btn cancel-btn"
                  onClick={handleCancelClick}
                >
                  Cancel
                </button>
              </div>
            </>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </>
  );
};

export default UserInfo;
