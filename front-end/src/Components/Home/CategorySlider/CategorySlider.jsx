import foodImg from "../../../assets/food-tag.jpeg";
import sportImg from "../../../assets/sport-tag.jpeg";
import techImg from "../../../assets/tech-tag.jpeg";
import fashionImg from "../../../assets/fashion-tag.jpeg";
import artImg from "../../../assets/art-tag.jpeg";
import healthImg from "../../../assets/health-tag.jpeg";
import moviesImg from "../../../assets/movie-tag.jpeg";
import cultureImg from "../../../assets/culture-tag.jpeg";

import "./category-slider.css";
const CategorySlider = () => {
  const categoryList = [
    { img: cultureImg, title: "Culture" },
    { img: foodImg, title: "Food" },
    { img: artImg, title: "Art" },
    { img: techImg, title: "Technology" },
    { img: fashionImg, title: "Fashion" },
    { img: healthImg, title: "Health" },
    { img: sportImg, title: "Sport" },
    { img: moviesImg, title: "Movies" },
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
