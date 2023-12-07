import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import Header from "../../Components/Header/Header";
import Breadcrumbs from "../../Components/Breadcrumbs/Breadcrumbs";
import ArticleCard from "../../Components/ArticleCard/ArticleCard";
import Footer from "../../Components/Footer/Footer";

import image from "../../assets/science-tag.jpeg";

import "./multi-category.css";

import { categoryList } from "../../Global";

const MultiCategory = () => {
  const routeList = [
    {
      name: "Categories",
      link: "/categories",
    },
  ];
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
  const articleList = [
    exampleArticle,
    exampleArticle,
    exampleArticle,
    exampleArticle,
  ];

  return (
    <>
      <Header />
      <Breadcrumbs crumbList={routeList} />
      {categoryList.map((category, index) => (
        <div key={index} className="home-section">
          <div className="home-section-banner">
            <h2>
              <FontAwesomeIcon icon={category.icon} /> {category.name}
            </h2>
            <a href={category.link} className="show-all-btn">
              Show all <FontAwesomeIcon icon={faChevronRight} />
            </a>
          </div>
          <div className="home-section-content">
            <div className="article-container">
              {articleList.map((article, articleIndex) => (
                <ArticleCard key={articleIndex} article={article} />
              ))}
            </div>
          </div>
        </div>
      ))}
      <Footer />
    </>
  );
};

export default MultiCategory;
