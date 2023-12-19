import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

import "./admin-header.css";

const AdminHeader = () => {
  const navigate = useNavigate();
  const logOut = () => {
    fetch("http://localhost:8000/api/v1/user/account/logout", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.message === "Logout successful") {
          navigate("/");
        }
      });
  };
  return (
    <div className="admin-header">
      <div className="admin-logo">THE MEGA PAPERS</div>
      <div className="admin-head-logout-btn" onClick={logOut}>
        LOGOUT
        <FontAwesomeIcon icon={faRightToBracket} className="head-login-ico" />
      </div>
    </div>
  );
};

export default AdminHeader;
