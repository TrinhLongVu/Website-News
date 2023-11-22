import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  return (
    <>
      <form action="">
        <div className="input-box">
          <FontAwesomeIcon icon={faEnvelope} className="field-ico" />
          <input
            type="email"
            className="input-field"
            placeholder="Email Address"
          />
        </div>
        <div className="input-box">
          <FontAwesomeIcon icon={faLock} className="field-ico" />
          <input
            type="password"
            className="input-field"
            placeholder="Password"
          />
        </div>
        <div className="forgot-pwd">
          <a href="">Forgot Password ?</a>
        </div>
        <button type="submit" className="submit-btn">
          LOGIN
        </button>
      </form>
      <div className="authen-route">
        Don't have an account? <a href="">Sign up</a>
      </div>
      <p>
        <span>or login with</span>
      </p>
      <button className="gg-login"></button>
    </>
  );
};

export default Login;
