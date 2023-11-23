import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import CategoryList from "../../Components/Home/CategoryList/CategoryList";
import "./home.css";
const Home = () => {
  return (
    <>
      <Header />
      <h2>Categories</h2>
      <CategoryList />
      <Footer />
    </>
  );
};

export default Home;
