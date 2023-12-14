import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark as solidBookmark } from "@fortawesome/free-solid-svg-icons";
import { faBookmark as regularBookmark } from "@fortawesome/free-regular-svg-icons";

import { calcTime } from "../../Global";

import "./article-card.css";
import { Link } from "react-router-dom";

const ArticleCard = ({ article }) => {
  const [isSaved, setSaved] = useState(false);

  const saveArticle = () => {
    setSaved(!isSaved);
  };

  return (
    <Link to={`/article/${article._id}`} className="article-card">
      <div
        className="article-card-thumbnail"
        style={{ backgroundImage: `url(${article.Image})` }}
      ></div>
      <div className="article-card-desc">
        <h4 className="article-card-title">{article.Title}</h4>
        <div className="article-card-para">{article.Detail}</div>
      </div>
      <div className="article-card-author">
        <div
          className="card-author-avt"
          style={{ backgroundImage: `url(${article.imageAuthor})` }}
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
    </Link>
  );
};

export default ArticleCard;
