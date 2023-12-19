import { Outlet } from "react-router-dom";
import AdminHeader from "./AdminHeader/AdminHeader";
import AdminNavbar from "./AdminNavbar/AdminNavbar";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const AdminLayout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:8000/api/v1/user/account/success", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.body) {
          if (json.body.Role !== "admin") {
            navigate("/");
          }
        } else {
          navigate("/");
        }
      });
  }, []);
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
