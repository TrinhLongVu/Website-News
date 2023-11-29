import foodImg from "../../../assets/food-tag.jpeg";
import sportImg from "../../../assets/sport-tag.jpeg";
import techImg from "../../../assets/tech-tag.jpeg";
import fashionImg from "../../../assets/fashion-tag.jpeg";
import artImg from "../../../assets/art-tag.jpeg";
import healthImg from "../../../assets/health-tag.jpeg";
import moviesImg from "../../../assets/movie-tag.jpeg";
import cultureImg from "../../../assets/culture-tag.jpeg";

import CategoryCard from "../CategoryCard/CategoryCard";

import "./category-list.css";
const CategoryList = () => {
  const categoryData = [
    { bg: cultureImg, title: "Culture" },
    { bg: foodImg, title: "Food" },
    { bg: artImg, title: "Art" },
    { bg: techImg, title: "Technology" },
    { bg: fashionImg, title: "Fashion" },
    { bg: healthImg, title: "Health" },
    { bg: sportImg, title: "Sport" },
    { bg: moviesImg, title: "Movies" },
  ];
  return (
    <div className="categories-list">
      {categoryData.map((category, index) => (
        <CategoryCard key={index} bg={category.bg} title={category.title} />
      ))}
    </div>
  );
};

export default CategoryList;
