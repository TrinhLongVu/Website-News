import { Outlet } from "react-router-dom";
import AdminHeader from "../../Components/Admin/AdminHeader/AdminHeader";
import AdminNavbar from "../../Components/Admin/AdminNavbar/AdminNavbar";
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
