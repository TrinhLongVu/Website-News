import React from "react";
import "./admin-article.css";
const AdminArticle = ({ article }) => {
  return (
    <div className="admin-article">
      <div
        className="admin-card-thumbnail"
        style={{ backgroundImage: `url(${article.Image})` }}
      ></div>
      <div className="admin-card-info">
        <h3 className="admin-card-title">{article.Title}</h3>
        <div className="card-post-time">{article.ID_author}</div>
      </div>
    </div>
  );
};

export default AdminArticle;
