import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Breadcrumbs from "../../Components/Breadcrumbs/Breadcrumbs";
import ArticleCard from "../../Components/ArticleCard/ArticleCard";
import image from "../../assets/env-tag.jpeg";

import { categoryList } from "../../Global";

import "./single-category.css";

import { useParams } from "react-router-dom";
const SingleCategory = () => {
  const { name } = useParams();
  let pageCategory = name.charAt(0).toUpperCase() + name.slice(1);
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
      <div className="single-category-article-container">
        <ArticleCard article={exampleArticle} />
        <ArticleCard article={exampleArticle} />
        <ArticleCard article={exampleArticle} />
        <ArticleCard article={exampleArticle} />
        <ArticleCard article={exampleArticle} />
        <ArticleCard article={exampleArticle} />
        <ArticleCard article={exampleArticle} />
        <ArticleCard article={exampleArticle} />
        <ArticleCard article={exampleArticle} />
        <ArticleCard article={exampleArticle} />
      </div>
    </>
  );
};

export default SingleCategory;
