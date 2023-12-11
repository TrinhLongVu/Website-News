import "./article-panel.css";

const ArticlePanel = ({ article }) => {
  return (
    <>
      <a
        href=""
        className="article-panel"
        style={{ backgroundImage: `url(${article.Image})` }}
      >
        <div className="article-panel-info">
          <div className="article-panel-title">{article.Title}</div>
          <div className="article-panel-para">{article.Detail}</div>
        </div>
      </a>
    </>
  );
};

export default ArticlePanel;
