import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTags,
  faMedal,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import CategoryList from "../../Components/Home/CategoryList/CategoryList";
import "./home.css";
import ArticleCard from "../../Components/ArticleCard/ArticleCard";

import image from "../../assets/sport-tag.jpeg";

const Home = () => {
  const exampleArticle = {
    thumbnail: image,
    title: "Opening Day of the Boating Season so let's set sail",
    content:
      "The text-overflow property specifies how overflowed content that is not displayed should be signaled to the user. It can display a lot of contnet dmnakwdnj dan",
    author: {
      name: "James adnaklndnadkjn",
      avatar: "https://picsum.photos/200/300",
    },
    time: "2 hours ago",
  };

  return (
    <>
      <Header />
      <div className="home-section">
        <div className="home-section-banner">
          <h2>
            <FontAwesomeIcon icon={faTags} /> Categories
          </h2>
          <a href="" className="show-all">
            Show all <FontAwesomeIcon icon={faChevronRight} />
          </a>
        </div>
        <div className="home-section-content">
          <CategoryList />
        </div>
      </div>
      <div className="home-section">
        <div className="home-section-banner">
          <h2>
            <FontAwesomeIcon icon={faMedal} /> Popular
          </h2>
          <a href="" className="show-all">
            Show all <FontAwesomeIcon icon={faChevronRight} />
          </a>
        </div>
        <div className="home-section-content">
          <div className="article-container">
            <ArticleCard article={exampleArticle} />
            <ArticleCard article={exampleArticle} />
            <ArticleCard article={exampleArticle} />
            <ArticleCard article={exampleArticle} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
