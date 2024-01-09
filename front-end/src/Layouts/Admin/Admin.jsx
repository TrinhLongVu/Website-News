import { Outlet } from "react-router-dom";
import AdminHeader from "./AdminHeader/AdminHeader";
import AdminNavbar from "./AdminNavbar/AdminNavbar";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
};

export default AdminLayout;
