import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark as solidBookmark } from "@fortawesome/free-solid-svg-icons";
import { faBookmark as regularBookmark } from "@fortawesome/free-regular-svg-icons";

import { calcTime } from "../../Global";

import "./article-card.css";

const ArticleCard = ({ article }) => {
  const [isSaved, setSaved] = useState(false);

  const saveArticle = () => {
    setSaved(!isSaved);
  };

  const readArticle = () => {
    if (!event.target.closest(".article-card-author")) {
      window.location.href = "/";
    }
  };

  const inspectAuthor = () => {
    if (!event.target.closest(".card-save-btn")) {
      window.location.href = "#";
    }
  };

  const userInfo = {
    avatar: "https://i.pravatar.cc/301",
  };

  return (
    <div className="article-card" onClick={readArticle}>
      <div
        className="article-card-thumbnail"
        style={{ backgroundImage: `url(${article.Image})` }}
      ></div>
      <div className="article-card-desc">
        <h4 className="article-card-title">{article.Title}</h4>
        <div className="article-card-para">{article.Detail}</div>
      </div>
      <div className="article-card-author" onClick={inspectAuthor}>
        <div
          className="card-author-avt"
          style={{ backgroundImage: `url(${userInfo.avatar})` }}
        ></div>
        <div className="card-author-info">
          <h3 className="card-author-name">{article.ID_author}</h3>
          <div className="card-post-time">{calcTime(article.posted_time)}</div>
        </div>
        <FontAwesomeIcon
          icon={isSaved ? solidBookmark : regularBookmark}
          onClick={saveArticle}
          className="card-save-btn"
        />
      </div>
    </div>
  );
};

export default ArticleCard;
