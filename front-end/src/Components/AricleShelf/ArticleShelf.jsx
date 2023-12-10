import ArticleCard from "../ArticleCard/ArticleCard";
import "./article-shelf.css";
const ArticleShelf = ({ articles }) => {
  return (
    <div className="article-shelf">
      {articles.map((article, index) => (
        <ArticleCard key={index} article={article} />
      ))}
    </div>
  );
};

export default ArticleShelf;
