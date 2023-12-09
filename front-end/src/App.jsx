import Home from "./Pages/Home/Home";
import About from "./pages/About-Us/About";
import MultiCategory from "./Pages/MultiCategory/MultiCategory";
import SingleCategory from "./Pages/SingleCategory/SingleCategory";
import Read from "./Pages/Read/Read";
import Error404 from "./Pages/Error-404/Error404";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Authentication from "./Pages/Authentication/Authentication";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories">
          <Route index element={<MultiCategory />} />
          <Route path="/categories/:name" element={<SingleCategory />} />
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
