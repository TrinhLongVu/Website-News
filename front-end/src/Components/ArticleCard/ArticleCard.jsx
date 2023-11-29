import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark as solidBookmark } from "@fortawesome/free-solid-svg-icons";
import { faBookmark as regularBookmark } from "@fortawesome/free-regular-svg-icons";

import "./article-card.css";

const ArticleCard = ({ article }) => {
  const [isSaved, setSaved] = useState(false);

  const saveArticle = () => {
    setSaved(!isSaved);
  };

  const readArticle = () => {
    if (!event.target.closest(".article-author")) {
      window.location.href = "/";
    }
  };

  const inspectAuthor = () => {
    if (!event.target.closest(".save-btn")) {
      window.location.href = "#";
    }
  };

  return (
    <div className="article-card" onClick={readArticle}>
      <div
        className="article-thumbnail"
        style={{ backgroundImage: `url(${article.thumbnail})` }}
      ></div>
      <div className="article-desc">
        <h4 className="article-title">{article.title}</h4>
        <div className="article-para">{article.content}</div>
      </div>
      <div className="article-author" onClick={inspectAuthor}>
        <div
          className="author-avt"
          style={{ backgroundImage: `url(${article.author.avatar})` }}
        ></div>
        <div className="author-info">
          <h3 className="author-name">{article.author.name}</h3>
          <div className="post-time">{article.time}</div>
        </div>
        <FontAwesomeIcon
          icon={isSaved ? solidBookmark : regularBookmark}
          onClick={saveArticle}
          className="save-btn"
        />
      </div>
    </div>
  );
};

export default ArticleCard;
