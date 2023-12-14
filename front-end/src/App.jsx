import Home from "./Pages/Home/Home";
import About from "./pages/About-Us/About";
import MultiCategory from "./Pages/MultiCategory/MultiCategory";
import SingleCategory from "./Pages/SingleCategory/SingleCategory";
import Read from "./Pages/Read/Read";
import Write from "./Pages/Write/Write";
import UserInfo from "./Pages/UserInfo/UserInfo";
import Error404 from "./Pages/Error-404/Error404";
import { Routes, Route } from "react-router-dom";
import Authentication from "./Pages/Authentication/Authentication";
import MainLayout from "./Layouts/MainLayout";
import Admin from "./Pages/Admin/Admin";
import AdminUpgradeWriter from "./pages/AdminUpgradeWriter/AdminUpgradeWriter";
import AdminReportedAccounts from "./pages/AdminReportedAccounts/AdminReportedAccounts";
import Saved from "./Pages/Saved/Saved";
import AdminArticleStatistics from "./pages/AdminArticleStatistics/AdminArticleStatistics";

import ScrollTop from "./Components/ScrollTop/ScrollTop";
import Search from "./Pages/Search/Search";
import AdminLayout from "./Layouts/AdminLayout/AdminLayout";
function App() {
  return (
    <>
      <ScrollTop />
      <Routes>
        {/* Main */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/categories">
            <Route index element={<MultiCategory />} />
            <Route path="/categories/:name" element={<SingleCategory />} />
          </Route>
          <Route path="/search/:word" element={<Search />} />
          <Route path="/about" element={<About />} />
          <Route path="/article/:id" element={<Read />} />
          <Route path="/user">
            <Route index element={<UserInfo />} />
            <Route path="/user/saved" element={<Saved />} />
            <Route path="/user/write" element={<Write />} />
          </Route>
          <Route path="*" element={<Error404 />} />
        </Route>
        {/* Authentication */}
        <Route path="/authentication">
          <Route
            path="/authentication/login"
            element={<Authentication authenType={"Login"} />}
          />
          <Route
            path="/authentication/register"
            element={<Authentication authenType={"Register"} />}
          />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Admin />} />
          <Route
            path="/admin/upgrade-writer"
            element={<AdminUpgradeWriter />}
          />
          <Route
            path="/admin/reported-accounts"
            element={<AdminReportedAccounts />}
          />
          <Route
            path="/admin/article-statistics"
            element={<AdminArticleStatistics />}
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
