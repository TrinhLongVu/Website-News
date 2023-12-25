import { useState, useEffect } from "react";
import Header from "./Header/Header";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "./Footer/Footer";
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
          setUserInfo(json.body);
        } else {
          setUserInfo(null);
        }
      });
  }, [userChange]);
  return (
    <>
      <Header userInfo={userInfo} setUserInfo={setUserInfo} />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
