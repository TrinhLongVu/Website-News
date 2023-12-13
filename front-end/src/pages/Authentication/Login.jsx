import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Login = () => {
  const login = async () => {
    const name = document.querySelector("#login-name").value;
    const password = document.querySelector("#login-password").value;
    console.log(name, password);
    try {
      const response = await fetch(
        "http://localhost:8000/api/v1/user/account/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: name,
            password: password,
          }),
        }
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {}
  };
  return (
    <>
      <div action="/api/v1/user/account/Login" method="POST">
        <div className="input-box">
          <FontAwesomeIcon icon={faEnvelope} className="field-ico" />
          <input
            type="email"
            className="input-field"
            id="login-name"
            placeholder="Email Address"
          />
        </div>
        <div className="input-box">
          <FontAwesomeIcon icon={faLock} className="field-ico" />
          <input
            type="password"
            className="input-field"
            id="login-password"
            placeholder="Password"
          />
        </div>
        <div className="forgot-pwd">
          <a href="">Forgot Password ?</a>
        </div>
        <button onClick={login} className="submit-btn">
          LOGIN
        </button>
      </div>
      <div className="authen-route">
        Don't have an account?{" "}
        <Link to="/authentication/register">Sign Up</Link>
      </div>
      <p>
        <span>or login with</span>
      </p>
      <button className="gg-login"></button>
    </>
  );
};

export default Login;
