import { Outlet } from "react-router-dom";
import AdminHeader from "./AdminHeader/AdminHeader";
import AdminNavbar from "./AdminNavbar/AdminNavbar";
const AdminLayout = () => {
  const bodyStyle = {
    display: "flex",
  };
  const contentStyle = {
    width: "75%",
    padding: "20px",
    backgroundColor: "white",
  };
  return (
    <>
      <AdminHeader />
      <div style={bodyStyle}>
        <AdminNavbar />
        <div style={contentStyle}>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
