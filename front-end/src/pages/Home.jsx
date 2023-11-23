import Header from "../components/Header";
import Footer from "../components/Footer";
import CategoryList from "../components/home/CategoryList";
import "../styles/home.css";
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
