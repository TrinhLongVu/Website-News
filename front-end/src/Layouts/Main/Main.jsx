import { useState, useEffect } from "react";
import Header from "./Header/Header";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "./Footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const MainLayout = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({});
  const [userChange, changeUser] = useState(false);
  useEffect(() => {
    fetch("http://localhost:8000/api/v1/user/account/success", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.body) {
          if (json.body.Role === "admin") {
            navigate("/admin");
          }
          console.log(json.body);
          setUserInfo(json.body);
        } else {
          setUserInfo(null);
        }
      });
  }, [userChange]);
  return (
    <>
      <Header userInfo={userInfo} setUserInfo={setUserInfo} />
      <Outlet context={{ userInfo, setUserInfo, userChange, changeUser }} />
      <Footer />
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

export default MainLayout;
