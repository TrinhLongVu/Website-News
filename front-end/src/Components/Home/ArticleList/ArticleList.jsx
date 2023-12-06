import "./article-list.css";

const ArticleList = ({ articles }) => {
  const [firstArticle, ...restArticles] = articles;

  return (
    <>
      <div className="article-list">
        <div
          className="list-big-article"
          style={{ backgroundImage: `url(${firstArticle.thumbnail})` }}
        >
          <div className="list-big-article-info">
            <div className="list-big-article-title">{firstArticle.title}</div>
            <div className="list-big-article-para">{firstArticle.content}</div>
          </div>
        </div>
        <div className="list-small-items">
          {restArticles.map((article, index) => (
            <div key={index} className="list-small-card">
              <div
                className="list-small-card-img"
                style={{ backgroundImage: `url(${article.thumbnail})` }}
              ></div>
              <div className="list-small-card-info">
                <div className="list-small-card-title">{article.title}</div>
                <div className="list-small-card-para">{article.content}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ArticleList;
