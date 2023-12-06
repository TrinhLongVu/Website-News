import "./article-panel.css";

const ArticlePanel = ({ article }) => {
  return (
    <>
      <a
        href=""
        className="article-panel"
        style={{ backgroundImage: `url(${article.thumbnail})` }}
      >
        <div className="article-panel-info">
          <div className="article-panel-title">{article.title}</div>
          <div className="article-panel-para">{article.content}</div>
        </div>
      </a>
    </>
  );
};

export default ArticlePanel;
