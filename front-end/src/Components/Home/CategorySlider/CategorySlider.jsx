import envImg from "../../../assets/env-tag.jpeg";
import techImg from "../../../assets/tech-tag.jpeg";
import energyImg from "../../../assets/energy-tag.jpeg";
import travelImg from "../../../assets/travel-tag.jpeg";
import foodImg from "../../../assets/food-tag.jpeg";
import healthImg from "../../../assets/health-tag.jpeg";
import scienceImg from "../../../assets/science-tag.jpeg";
import fashionImg from "../../../assets/fashion-tag.jpeg";
import lifestyleImg from "../../../assets/lifestyle-tag.jpeg";
import socialImg from "../../../assets/social-tag.jpeg";
import cultureImg from "../../../assets/culture-tag.jpeg";

import "./category-slider.css";
const CategorySlider = () => {
  const categoryList = [
    { img: envImg, title: "Environment" },
    { img: techImg, title: "Technology" },
    { img: energyImg, title: "Energy" },
    { img: travelImg, title: "Travel" },
    { img: foodImg, title: "Food" },
    { img: healthImg, title: "Health" },
    { img: scienceImg, title: "Science" },
    { img: fashionImg, title: "Fashion" },
    { img: lifestyleImg, title: "Lifestyle" },
    { img: socialImg, title: "Social" },
    { img: cultureImg, title: "Culture" },
  ];
  return (
    <div className="categories-list">
      {categoryList.map((category, index) => (
        <a href="" className="category-card">
          <div
            className="category-card-bg"
            style={{
              backgroundImage: `url("${category.img}")`,
            }}
          ></div>
          <h3 className="category-card-title">#{category.title}</h3>
        </a>
      ))}
    </div>
  );
};

export default CategorySlider;
