import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSeedling,
  faGears,
  faChargingStation,
  faPlaneDeparture,
  faHamburger,
  faHandHoldingMedical,
  faFlask,
  faShirt,
  faUsers,
  faCocktail,
  faUsersRays,
} from "@fortawesome/free-solid-svg-icons";

import envImg from "../../assets/env-tag.jpeg";
import techImg from "../../assets/tech-tag.jpeg";
import energyImg from "../../assets/energy-tag.jpeg";
import travelImg from "../../assets/travel-tag.jpeg";
import foodImg from "../../assets/food-tag.jpeg";
import healthImg from "../../assets/health-tag.jpeg";
import scienceImg from "../../assets/science-tag.jpeg";
import fashionImg from "../../assets/fashion-tag.jpeg";
import lifestyleImg from "../../assets/lifestyle-tag.jpeg";
import socialImg from "../../assets/social-tag.jpeg";
import cultureImg from "../../assets/culture-tag.jpeg";

import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Breadcrumbs from "../../Components/Breadcrumbs/Breadcrumbs";
import ArticleCard from "../../Components/ArticleCard/ArticleCard";
import image from "../../assets/env-tag.jpeg";

import "./single-category.css";
const SingleCategory = ({ pageCategory }) => {
  const routeList = [
    {
      name: pageCategory,
      link: "/categories/environment",
    },
    {
      name: "Categories",
      link: "/categories",
    },
  ];

  const bannerCategoryList = [
    { icon: faSeedling, name: "Environment", img: envImg },
    { icon: faGears, name: "Technology", img: techImg },
    { icon: faChargingStation, name: "Energy", img: energyImg },
    { icon: faPlaneDeparture, name: "Travel", img: travelImg },
    { icon: faHamburger, name: "Food", img: foodImg },
    { icon: faHandHoldingMedical, name: "Health", img: healthImg },
    { icon: faFlask, name: "Science", img: scienceImg },
    { icon: faShirt, name: "Fashion", img: fashionImg },
    { icon: faCocktail, name: "Lifestyle", img: lifestyleImg },
    { icon: faUsers, name: "Social", img: socialImg },
    { icon: faUsersRays, name: "Culture", img: cultureImg },
  ];

  const bannerCategory = bannerCategoryList.find(
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
      <Header />
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
      <div className="article-container">
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
      <Footer />
    </>
  );
};

export default SingleCategory;
