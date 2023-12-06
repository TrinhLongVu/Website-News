import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import "./user-info.css";

const UserInfo = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [formData, setFormData] = useState({
    username: "Simon",
    email: "sg@gmail.com",
    bio: "Hi everyone, this is the bio of my account",
    birthday: "",
    gender: "",
    phonenumber: "",
    address: "",
    // Add more fields as needed
  });

  // Correctly import useRef from React
  const initialFormData = useRef({ ...formData });

  const handleEditClick = () => {
    setIsEditMode(true);
  };

  const handleSaveClick = () => {
    // Add logic to save the form data
    initialFormData.current = { ...formData };
    setIsEditMode(false);
  };

  const handleCancelClick = () => {
    // Reset form data to initial values when canceling
    setFormData({ ...initialFormData.current });
    setIsEditMode(false);
  };

  const handleChange = (e) => {
    // Update form data on input change
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <>
      <Header />

      <div className="avt-info">
        <div className="avt">
          <div className="avatar-big"></div>
          <a className="change-profile-pic-btn" href="#">
            <FontAwesomeIcon icon={faEdit} /> Change Avatar
          </a>
          <a className="sign-out" href="#">
            Sign Out
          </a>
        </div>

        <form className="info">
          {isEditMode ? (
            <>
              <div></div>
            </>
          ) : (
            <div className="action-btn change-info-btn" onClick={handleEditClick}>
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
              value={formData.username}
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
              value={formData.email}
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
              value={formData.gender}
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
              value={formData.phonenumber}
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
              value={formData.address}
              readOnly={!isEditMode}
              onChange={handleChange}
            />
          </div>

          {isEditMode ? (
            <>
              <div className="save-cancel-btn-container">
                <button className="action-btn save-btn" onClick={handleSaveClick}>
                  Save
                </button>
                <button className="action-btn cancel-btn" onClick={handleCancelClick}>
                  Cancel
                </button>
              </div>
            </>
          ) : (
            <div></div>
          )}
        </form>
      </div>

      <Footer />
    </>
  );
};

export default UserInfo;
