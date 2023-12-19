import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import { categoryList } from "../../Global";

import Breadcrumbs from "../../Components/Breadcrumbs/Breadcrumbs";
import ArticleShelf from "../../Components/AricleShelf/ArticleShelf";

import "./multi-category.css";

const MultiCategory = () => {
  const routeList = [
    {
      name: "Categories",
      link: "/categories",
    },
  ];

  const [categoriesArticleList, setCategoriesArticleList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchPromises = categoryList.map(async (category) => {
          const response = await fetch(
            `http://localhost:8000/api/v1/article/page/pagination?page=1&limit=4&category=${category.name.toLowerCase()}`
          );
          const json = await response.json();
          return json.data;
        });
        const fetchedArticleList = await Promise.all(fetchPromises);
        setCategoriesArticleList(fetchedArticleList);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Breadcrumbs crumbList={routeList} />
      {categoryList.map((category, index) => (
        <div key={index} className="home-section">
          <div className="home-section-banner">
            <h2>
              <FontAwesomeIcon icon={category.icon} /> {category.name}
            </h2>
            <Link to={category.link} className="show-all-btn">
              Show all <FontAwesomeIcon icon={faChevronRight} />
            </Link>
          </div>
          <div className="home-section-content">
            <div className="article-container">
              {categoriesArticleList[index] && (
                <ArticleShelf
                  key={index}
                  articles={categoriesArticleList[index]}
                />
              )}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default MultiCategory;
