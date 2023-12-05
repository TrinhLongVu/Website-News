import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faTags,
  faMedal,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import CategoryList from "../../Components/Home/CategoryList/CategoryList";
import ArticleCard from "../../Components/ArticleCard/ArticleCard";
import ArticleSlider from "../../Components/Home/ArticleSlider/ArticleSlider";

import image from "../../assets/sport-tag.jpeg";

import "./home.css";
import Breadcrumbs from "../../Components/Breadcrumbs/Breadcrumbs";

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

  const articleList = [
    exampleArticle,
    exampleArticle,
    exampleArticle,
    exampleArticle,
    exampleArticle,
  ];

  return (
    <>
      <Header />
      <div className="home-section">
        <div className="home-section-banner">
          <h2>
            <FontAwesomeIcon icon={faTags} /> Categories
          </h2>
          <a href="" className="show-all-btn">
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
            <FontAwesomeIcon icon={faEye} /> Most Read
          </h2>
        </div>
        <div className="home-section-content">
          <ArticleSlider articles={articleList} />
        </div>
      </div>
      <div className="home-section">
        <div className="home-section-banner">
          <h2>
            <FontAwesomeIcon icon={faMedal} /> Popular
          </h2>
          <a href="" className="show-all-btn">
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
