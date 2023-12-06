import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSeedling,
  faGears,
  faChargingStation,
  faPlaneDeparture,
  faHamburger,
  faHandHoldingMedical,
  faChevronRight,
  faFlask,
  faShirt,
  faUsers,
  faCocktail,
  faUsersRays,
} from "@fortawesome/free-solid-svg-icons";

import Header from "../../Components/Header/Header";
import Breadcrumbs from "../../Components/Breadcrumbs/Breadcrumbs";
import ArticleCard from "../../Components/ArticleCard/ArticleCard";
import Footer from "../../Components/Footer/Footer";

import image from "../../assets/science-tag.jpeg";

import "./multi-category.css";

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
  const categoriesList = [
    {
      icon: faSeedling,
      name: "Environment",
      link: "#",
      articles: articleList,
    },
    {
      icon: faGears,
      name: "Technology",
      link: "#",
      articles: articleList,
    },
    {
      icon: faChargingStation,
      name: "Energy",
      link: "#",
      articles: articleList,
    },
    {
      icon: faPlaneDeparture,
      name: "Travel",
      link: "#",
      articles: articleList,
    },
    {
      icon: faHamburger,
      name: "Food",
      link: "#",
      articles: articleList,
    },
    {
      icon: faHandHoldingMedical,
      name: "Health",
      link: "#",
      articles: articleList,
    },
    {
      icon: faFlask,
      name: "Science",
      link: "#",
      articles: articleList,
    },
    {
      icon: faShirt,
      name: "Fashion",
      link: "#",
      articles: articleList,
    },
    {
      icon: faCocktail,
      name: "Lifestyle",
      link: "#",
      articles: articleList,
    },
    {
      icon: faUsers,
      name: "Social",
      link: "#",
      articles: articleList,
    },
    {
      icon: faUsersRays,
      name: "Culture",
      link: "#",
      articles: articleList,
    },
  ];

  return (
    <>
      <Header />
      <Breadcrumbs crumbList={routeList} />
      {categoriesList.map((category, index) => (
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
              {category.articles.map((article, articleIndex) => (
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
