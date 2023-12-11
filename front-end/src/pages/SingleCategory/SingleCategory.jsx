import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Breadcrumbs from "../../Components/Breadcrumbs/Breadcrumbs";
import image from "../../assets/env-tag.jpeg";

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

  const exampleArticle = {
    thumbnail: image,
    title:
      "Opening Day of the Boating Season so let's set sail to the big blue sea",
    content:
      "So, you finally went to your first boxing class and learned the basics of the sport. You also learned that it's recommended to wrap your hands before putting on the gloves. But there are times when you just don't feel like wrapping them and you wonder why you even need them. Well, this blog is going to explain the benefits of wrapping your hands.",
    author: {
      name: "James adnaklndnadkjn",
      avatar: "https://picsum.photos/200/300",
    },
    time: "2 hours ago",
  };

  const exampleArticleList = [
    exampleArticle,
    exampleArticle,
    exampleArticle,
    exampleArticle,
    exampleArticle,
    exampleArticle,
    exampleArticle,
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
      <ArticleShelf articles={exampleArticleList} />
    </>
  );
};

export default SingleCategory;
