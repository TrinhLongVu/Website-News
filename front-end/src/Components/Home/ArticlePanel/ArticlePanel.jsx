import { Link } from "react-router-dom";
import "./article-panel.css";

const ArticlePanel = ({ article }) => {
  return (
    <>
      <Link
        to={`/article/${article._id}`}
        className="article-panel"
        style={{ backgroundImage: `url(${article.Image})` }}
      >
        <div className="article-panel-info">
          <div className="article-panel-title">{article.Title}</div>
          <div className="article-panel-para">{article.Detail}</div>
        </div>
      </Link>
    </>
  );
};

export default ArticlePanel;
