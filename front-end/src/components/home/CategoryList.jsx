import image from "../../assets/images/food-tag.jpeg";
import CategoryCard from "./CategoryCard";
const CategoryList = () => {
  const listStyle = {
    width: "1260px",
    display: "flex",
    justifyContent: "space-between",
    overflowY: "hidden",
  };
  return (
    <div className="categories-list" style={listStyle}>
      <CategoryCard bg={image} title="Food" />
      <CategoryCard bg={image} title="Food" />
      <CategoryCard bg={image} title="Food" />
      <CategoryCard bg={image} title="Food" />
      <CategoryCard bg={image} title="Food" />
      <CategoryCard bg={image} title="Food" />
      <CategoryCard bg={image} title="Food" />
      <CategoryCard bg={image} title="Food" />
    </div>
  );
};

export default CategoryList;
