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
    { img: envImg, name: "Environment", link: "#" },
    { img: techImg, name: "Technology", link: "#" },
    { img: energyImg, name: "Energy", link: "#" },
    { img: travelImg, name: "Travel", link: "#" },
    { img: foodImg, name: "Food", link: "#" },
    { img: healthImg, name: "Health", link: "#" },
    { img: scienceImg, name: "Science", link: "#" },
    { img: fashionImg, name: "Fashion", link: "#" },
    { img: lifestyleImg, name: "Lifestyle", link: "#" },
    { img: socialImg, name: "Social", link: "#" },
    { img: cultureImg, name: "Culture", link: "#" },
  ];
  return (
    <div className="categories-list">
      {categoryList.map((category, index) => (
        <a href={category.link} className="category-card">
          <div
            className="category-card-bg"
            style={{
              backgroundImage: `url("${category.img}")`,
            }}
          ></div>
          <h3 className="category-card-name">#{category.name}</h3>
        </a>
      ))}
    </div>
  );
};

export default CategorySlider;
