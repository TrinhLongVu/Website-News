import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faTags,
  faMedal,
  faHeart,
  faNewspaper,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import CategorySlider from "../../Components/Home/CategorySlider/CategorySlider";
import ArticleCard from "../../Components/ArticleCard/ArticleCard";
import ArticleSlider from "../../Components/Home/ArticleSlider/ArticleSlider";
import ArticlePanel from "../../Components/Home/ArticlePanel/ArticlePanel";
import ArticleList from "../../Components/Home/ArticleList/ArticleList";

import image from "../../assets/social-tag.jpeg";

import "./home.css";

import { Link } from "react-router-dom";
const Home = () => {
  const exampleArticle = {
    thumbnail: image,
    title:
      "Opening Day of the Boating Season so let's set sail to the big blue sea",
    content:
      "So, you finally went to your first boxing class and learned the basics of the sport. You also learned that it’s recommended to wrap your hands before putting on the gloves. But there are times when you just don’t feel like wrapping them and you wonder why you even need them. Well, this blog is going to explain the benefits of wrapping your hands.",
    author: {
      name: "James adnaklndnadkjn",
      avatar: "https://picsum.photos/200/300",
    },
    time: "2 hours ago",
  };

  const newArticleList = [
    exampleArticle,
    exampleArticle,
    exampleArticle,
    exampleArticle,
    exampleArticle,
    exampleArticle,
    exampleArticle,
  ];

  return (
    <>
      <div className="home-section">
        <div className="home-section-banner">
          <h2>
            <FontAwesomeIcon icon={faTags} /> Categories
          </h2>
          <Link to="/categories" className="show-all-btn">
            Show all <FontAwesomeIcon icon={faChevronRight} />
          </Link>
        </div>
        <div className="home-section-content">
          <CategorySlider />
        </div>
      </div>
      <div className="home-section">
        <div className="home-section-banner">
          <h2>
            <FontAwesomeIcon icon={faEye} /> Most Read
          </h2>
        </div>
        <div className="home-section-content">
          <ArticleSlider />
        </div>
      </div>
      <div className="home-section">
        <div className="home-section-banner">
          <h2>
            <FontAwesomeIcon icon={faHeart} /> Most Liked
          </h2>
        </div>
        <div className="home-section-content">
          <div className="article-container">
            <ArticlePanel article={exampleArticle} />
            <ArticlePanel article={exampleArticle} />
            <ArticlePanel article={exampleArticle} />
          </div>
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
      <div className="home-section">
        <div className="home-section-banner">
          <h2>
            <FontAwesomeIcon icon={faNewspaper} /> New
          </h2>
          <a href="" className="show-all-btn">
            Show all <FontAwesomeIcon icon={faChevronRight} />
          </a>
        </div>
        <div className="home-section-content">
          <ArticleList articles={newArticleList} />
        </div>
      </div>
    </>
  );
};

export default Home;
