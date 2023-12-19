import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";

import "./admin-header.css";

const AdminHeader = () => {
  return (
    <div className="admin-header">
      <div className="admin-logo">THE MEGA PAPERS</div>
      <div className="admin-head-logout-btn">
        LOGOUT
        <FontAwesomeIcon icon={faRightToBracket} className="head-login-ico" />
      </div>
    </div>
  );
};

export default AdminHeader;
