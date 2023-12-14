import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Breadcrumbs from "../../Components/Breadcrumbs/Breadcrumbs";

import { categoryList } from "../../Global";

import "./single-category.css";
import ArticleShelf from "../../Components/AricleShelf/ArticleShelf";

const SingleCategory = () => {
  const { name } = useParams();
  const navigate = useNavigate();

  let pageCategory = name.charAt(0).toUpperCase() + name.slice(1);

  const isValidCategory = (categoryName) => {
    return categoryList.some(
      (category) => category.name.toLowerCase() === categoryName.toLowerCase()
    );
  };

  useEffect(() => {
    if (!isValidCategory(name)) {
      navigate("*");
    }
  }, []);

  const routeList = [
    {
      name: pageCategory,
      link: `/categories/${name}`,
    },
    {
      name: "Categories",
      link: "/categories",
    },
  ];

  const bannerCategory = categoryList.find(
    (category) => category.name === pageCategory
  );

  const [articleList, setArticleList] = useState([]);

  useEffect(() => {
    fetch(
      `http://localhost:8000/api/v1/article/page/pagination?page=1&limit=12&category=${name}`
    )
      .then((res) => res.json())
      .then((json) => {
        console.log(json.data);
        setArticleList(json.data);
      });
  }, []);

  return (
    <>
      <Breadcrumbs crumbList={routeList} />
      {bannerCategory && (
        <div
          className="category-banner"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.25)), url(${bannerCategory.img})`,
          }}
        >
          <FontAwesomeIcon
            icon={bannerCategory.icon}
            className="category-banner-icon"
          />
          {bannerCategory.name}
        </div>
      )}
      <ArticleShelf articles={articleList} />
    </>
  );
};

export default SingleCategory;
