import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

import Header from "../components/Header"
import Footer from "../components/Footer"

import "../styles/user-info.css"

const UserInfo = () => {
    return (
        <>
            <Header/>
            <div className="avt-account-info">
                <div className="avt">
                    <div className="avatar-big"></div>
                    <a className="change-profile-pic" href="#"><FontAwesomeIcon icon={faEdit}/> Change</a>
                    <a className="sign-out" href="#">Sign Out</a>
                </div>

                <div className="account-info">
                    <h1 id="info-title">Account Information</h1>

                    <h3>Username</h3>
                    <input className="info-inp" type="text" name="" id="" defaultValue="Simon" readOnly />
                    <h3>Email</h3>
                    <input className="info-inp" type="email" name="" id="" defaultValue="sg@gmail.com" readOnly />
                    <h3>Bio</h3>
                    <textarea className="bio-inp" name="" id="" readOnly cols="30" rows="10" defaultValue="Hi everyone, this is the bio of my account"></textarea>
                    
                </div>
            </div>
            <div className="personal-info">
                <h1>Personal Information</h1>
            </div>
            <Footer/>
        </>
    )
}

export default UserInfo