import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import "./user-info.css";

const UserInfo = () => {
  return (
    <>
      <Header />

      <div className="avt-account-info">
        <div className="avt">
          <div className="avatar-big"></div>
          <a className="change-profile-pic-btn" href="#">
            <FontAwesomeIcon icon={faEdit} /> Change
          </a>
          <a className="sign-out" href="#">
            Sign Out
          </a>
        </div>

        <div className="account-info">
          <h1 className="info-title">Account Information</h1>

          <div className="info-field">
            <h3>Username</h3>
            <input
              className="info-inp"
              type="text"
              name="username"
              id="username"
              defaultValue="Simon"
              readOnly
            />
          </div>

          <div className="info-field">
            <h3>Email</h3>
            <input
              className="info-inp"
              type="email"
              name="email"
              id="email"
              defaultValue="sg@gmail.com"
              readOnly
            />
          </div>

          <div className="info-field">
            <h3>Bio</h3>
            <textarea
              className="bio-inp"
              name="bio"
              id="bio"
              readOnly
              cols="30"
              rows="10"
              defaultValue="Hi everyone, this is the bio of my account"
            ></textarea>
          </div>
        </div>
      </div>

      <div className="personal-info">
        <h1 className="info-title">Personal Information</h1>

        <div className="info-field">
          <h3>Birthday</h3>
          <input
            className="info-inp"
            type="text"
            name="birthday"
            id="birthday"
            placeholder="No data"
            readOnly
          />
        </div>

        <div className="info-field">
          <h3>Gender</h3>
          <input
            className="info-inp"
            type="text"
            name="gender"
            id="gender"
            placeholder="No data"
            readOnly
          />
        </div>

        <div className="info-field">
          <h3>Phone number</h3>
          <input
            className="info-inp"
            type="text"
            name="phonenumber"
            id="phonenumber"
            placeholder="No data"
            readOnly
          />
        </div>

        <div className="info-field">
          <h3>Address</h3>
          <input
            className="info-inp"
            type="text"
            name="address"
            id="address"
            placeholder="No data"
            readOnly
          />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default UserInfo;
