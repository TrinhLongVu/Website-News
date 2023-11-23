import image from "../../../assets/food-tag.jpeg";
import CategoryCard from "../CategoryCard/CategoryCard";

import "./category-list.css";
const CategoryList = () => {
  return (
    <div className="categories-list">
      <CategoryCard bg={image} title="Food" />
      <CategoryCard bg={image} title="Sport" />
      <CategoryCard bg={image} title="Movies" />
      <CategoryCard bg={image} title="Food" />
      <CategoryCard bg={image} title="Food" />
      <CategoryCard bg={image} title="Food" />
      <CategoryCard bg={image} title="Food" />
      <CategoryCard bg={image} title="Food" />
    </div>
  );
};

export default CategoryList;
