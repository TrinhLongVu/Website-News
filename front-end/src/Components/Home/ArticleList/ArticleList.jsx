import "./article-list.css";
import { useEffect, useState } from "react";
const ArticleList = () => {
  const [firstArticle, setFirstArticle] = useState({});
  const [restArticleList, setRestArticleList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/v1/article/top/timer?limit=7")
      .then((res) => res.json())
      .then((json) => {
        const [fetchedFirstArticle, ...fetchedRestArticles] = json.data;
        setFirstArticle(fetchedFirstArticle);
        setRestArticleList(fetchedRestArticles);
      });
  }, []);
  return (
    <>
      <div className="article-list">
        <div
          className="list-big-article"
          style={{ backgroundImage: `url(${firstArticle.Image})` }}
        >
          <div className="list-big-article-info">
            <div className="list-big-article-title">{firstArticle.Title}</div>
            <div className="list-big-article-para">{firstArticle.Detail}</div>
          </div>
        </div>
        <div className="list-small-items">
          {restArticleList.map((article, index) => (
            <div key={index} className="list-small-card">
              <div
                className="list-small-card-img"
                style={{ backgroundImage: `url(${article.Image})` }}
              ></div>
              <div className="list-small-card-info">
                <div className="list-small-card-title">{article.Title}</div>
                <div className="list-small-card-para">{article.Detail}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ArticleList;
