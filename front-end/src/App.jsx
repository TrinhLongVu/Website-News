import Home from "./Pages/Home/Home";
import About from "./pages/About-Us/About";
import MultiCategory from "./Pages/MultiCategory/MultiCategory";
import SingleCategory from "./Pages/SingleCategory/SingleCategory";
import Read from "./Pages/Read/Read";
import Write from "./Pages/Write/Write";
import Error404 from "./Pages/Error-404/Error404";
import { Routes, Route } from "react-router-dom";
import Authentication from "./Pages/Authentication/Authentication";
import MainLayout from "./Layouts/MainLayout";
import Admin from "./pages/Admin/Admin"

import ScrollTop from "./Components/ScrollTop/ScrollTop";
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
          <Route path="/about" element={<About />} />
          <Route path="/write" element={<Write />} />
          <Route path="/read" element={<Read />} />
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
        <Route path="/admin" element={<Admin/>}/>
      </Routes>
    </>
  );
}

export default App;
