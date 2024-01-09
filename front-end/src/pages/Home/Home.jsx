import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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

import "./home.css";

const Home = () => {
  const [likedArticleList, setLikedArticleList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/v1/article/top/likes?limit=3")
      .then((res) => res.json())
      .then((json) => {
        setLikedArticleList(json.data);
      });
  }, []);

  const [popularArticleList, setPopularArticleList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/v1/article/top/views?limit=4")
      .then((res) => res.json())
      .then((json) => {
        setPopularArticleList(json.data);
      });
  }, []);

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
            {likedArticleList.map((article, index) => (
              <ArticlePanel key={index} article={article} />
            ))}
          </div>
        </div>
      </div>
      <div className="home-section">
        <div className="home-section-banner">
          <h2>
            <FontAwesomeIcon icon={faMedal} /> Popular
          </h2>
        </div>
        <div className="home-section-content">
          <div className="article-container">
            {popularArticleList.map((article, index) => (
              <ArticleCard key={index} article={article} />
            ))}
          </div>
        </div>
      </div>
      <div className="home-section">
        <div className="home-section-banner">
          <h2>
            <FontAwesomeIcon icon={faNewspaper} /> New
          </h2>
        </div>
        <div className="home-section-content">
          <ArticleList />
        </div>
      </div>
    </>
  );
};

export default Home;
