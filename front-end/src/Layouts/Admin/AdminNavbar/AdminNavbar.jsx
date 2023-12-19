import { NavLink } from "react-router-dom";
import "./admin-navbar.css";

const AdminNavbar = () => {
  const classNameFunc = ({ isActive }) =>
    isActive ? "admin-nav active-admin-nav" : "admin-nav";
  return (
    <div className="admin-navbar">
      <NavLink to="/admin/priority" className={classNameFunc}>
        Priority
      </NavLink>
      <NavLink to="/admin/upgrade-writer" className={classNameFunc}>
        Upgrade Writer
      </NavLink>
      <NavLink to="/admin/reported-accounts" className={classNameFunc}>
        Reported Account
      </NavLink>
      <NavLink to="/admin/article-statistics" className={classNameFunc}>
        Article Statistics
      </NavLink>
    </div>
  );
};

export default AdminNavbar;
