import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const registerUser = async () => {
    const email = document.querySelector("#register-email").value;
    const password = document.querySelector("#register-password").value;
    const confirmedPassword = document.querySelector(
      "#register-confirm-password"
    ).value;
    if (password === confirmedPassword) {
      setError(false);
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

        if (response.ok) {
          navigate("/authentication/login");
        } else {
          console.error("Failed to create post");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    } else {
      setError(true);
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
        {error && (
          <div className="auth-error-msg">
            Password & Confirmed Password do not match
          </div>
        )}
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
