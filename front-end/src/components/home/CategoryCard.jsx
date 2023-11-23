import "../../styles/components/category-card.css";

const CategoryCard = ({ bg, title }) => {
  return (
    <div className="category-card">
      <div
        className="card-bg"
        style={{
          backgroundImage: `url("${bg}")`,
        }}
      ></div>
      <h3 className="card-title">#{title}</h3>
    </div>
  );
};

export default CategoryCard;
