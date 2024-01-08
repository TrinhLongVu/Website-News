import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const navigate = useNavigate();
  const registerUser = async () => {
    const email = document.querySelector("#register-email").value;
    const password = document.querySelector("#register-password").value;
    const confirmedPassword = document.querySelector(
      "#register-confirm-password"
    ).value;
    if (password === confirmedPassword) {
      const sendObj = {
        UserName: email,
        Password: password,
        ConfirmPassword: confirmedPassword,
      };
      try {
        const response = await fetch("http://localhost:8000/api/v1/user", {
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify(sendObj),
        });

        const json = await response.json();
        console.log(json);
        if (json.status === "success") {
          toast.success("Successfully created new account", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          navigate("/authentication/login");
        } else if (json.status === "fail") {
          toast.error(json.msg, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }
      } catch (error) {
        toast.error("Something's error. Please try again", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    } else {
      toast.error("Passwords doesn't match", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };
  return (
    <>
      <div>
        <div className="input-box">
          <FontAwesomeIcon icon={faEnvelope} className="field-ico" />
          <input
            type="email"
            className="input-field"
            id="register-email"
            placeholder="Email Address"
          />
        </div>
        <div className="input-box">
          <FontAwesomeIcon icon={faLock} className="field-ico" />
          <input
            type="password"
            className="input-field"
            id="register-password"
            placeholder="Password"
          />
        </div>
        <div className="input-box">
          <FontAwesomeIcon icon={faLock} className="field-ico" />
          <input
            type="password"
            className="input-field"
            id="register-confirm-password"
            placeholder="Confirm Password"
          />
        </div>
        <div className="agreed-term">
          By clicking "Register" you agree to our terms and privacy policy.
        </div>
        <button onClick={registerUser} className="submit-btn">
          REGISTER
        </button>
      </div>
      <div className="authen-route">
        Already have an account? <Link to="/authentication/login">Sign In</Link>
      </div>
    </>
  );
};

export default Register;
