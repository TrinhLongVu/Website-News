import { NavLink } from "react-router-dom";
import "./admin-navbar.css";

const AdminNavbar = () => {
  const selectedStyle = {
    backgroundColor: "green",
  };
  return (
    <div className="admin-navbar">
      <NavLink
        to="/admin"
        className="admin-nav"
        activeStyle={selectedStyle}
        exact
      >
        Priority
      </NavLink>
      <NavLink
        to="/admin/upgrade-writer"
        className="admin-nav"
        activeStyle={selectedStyle}
      >
        Upgrade Writer
      </NavLink>
      <NavLink
        to="/admin/reported-accounts"
        className="admin-nav"
        activeStyle={selectedStyle}
      >
        Reported Account
      </NavLink>
      <NavLink
        to="/admin/article-statistics"
        className="admin-nav"
        activeStyle={selectedStyle}
      >
        Article Statistics
      </NavLink>
    </div>
  );
};

export default AdminNavbar;
