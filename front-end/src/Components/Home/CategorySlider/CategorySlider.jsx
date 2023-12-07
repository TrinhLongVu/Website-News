import { categoryList } from "../../../Global";

import "./category-slider.css";
const CategorySlider = () => {
  return (
    <div className="categories-list">
      {categoryList.map((category) => (
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
