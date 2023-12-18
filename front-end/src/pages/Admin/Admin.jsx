import React, { useState, useEffect } from "react";
import "./admin.css";
import AdminArticle from "../../Components/Admin/AdminArticle/AdminArticle";

const Admin = () => {
  const [articleList, setArticleList] = useState([]);
  const [topArticles, setTopArticles] = useState([]);
  const [originalArticleList, setOriginalArticleList] = useState([]);
  const [originalTopArticles, setOriginalTopArticles] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/v1/article/")
      .then((res) => res.json())
      .then((json) => {
        const mappedArticles = json.data.map((article, idx) => ({ ...article, idx }));
        setArticleList(mappedArticles);
        setOriginalArticleList([...mappedArticles]);
      });
  }, []);

  const handleDragStart = (e, article, target) => {
    e.dataTransfer.setData("article", JSON.stringify(article));
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, target) => {
    e.preventDefault();
    const draggedArticle = JSON.parse(e.dataTransfer.getData("article"));

    if (target === "topArticles") {
      const newArticleList = articleList.filter(
        (article) => article.idx !== draggedArticle.idx
      );
      setArticleList(newArticleList);
      setTopArticles([...topArticles, draggedArticle]);
    } else if (target === "articleList") {
      const newTopArticles = topArticles.filter(
        (article) => article.idx !== draggedArticle.idx
      );
      setTopArticles(newTopArticles);
      setArticleList([...articleList, draggedArticle]);
    }
  };

  const handleSaveClick = () => {
    setOriginalArticleList([...articleList]);
    setOriginalTopArticles([...topArticles]);
  };

  const handleCancelClick = () => {
    setArticleList([...originalArticleList]);
    setTopArticles([...originalTopArticles]);
  };

  return (
    <>
      <div className="priority-container">
        <div
          className="priority-container-side"
          onDragOver={(e) => handleDragOver(e)}
          onDrop={(e) => handleDrop(e, "articleList")}
        >
          <div className="priority-title">Articles</div>
          <div className="priority-scroll-left">
            {articleList.map((article) => (
              <div
                key={article.idx}
                draggable
                onDragStart={(e) => handleDragStart(e, article, "articleList")}
              >
                <AdminArticle article={article} />
              </div>
            ))}
          </div>
        </div>
        <div
          className="priority-container-side"
          onDragOver={(e) => handleDragOver(e)}
          onDrop={(e) => handleDrop(e, "topArticles")}
        >
          <div className="priority-title">Top articles</div>
          <div className="priority-scroll-right">
            {topArticles.map((article) => (
              <div key={article.idx}
                draggable
                onDragStart={(e) => handleDragStart(e, article, "topArticles")}>
                <AdminArticle article={article} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="admin-save-cancel-btn-container">
        <button
          className="admin-action-btn admin-save-btn"
          onClick={handleSaveClick}
        >
          Save
        </button>
        <button
          className="admin-action-btn admin-cancel-btn"
          onClick={handleCancelClick}
        >
          Cancel
        </button>
      </div>
    </>
  );
};

export default Admin;
