import Login from "../components/authen/Login";
import Register from "../components/authen/Register";
import "../styles/authen.css";

const Authentication = ({ authenType }) => {
  return (
    <div className="auth">
      <div className="authen-frame">
        <h1 className="authen-title">{authenType}</h1>
        {authenType === "Login" ? <Login /> : <Register />}
      </div>
    </div>
  );
};

export default Authentication;
