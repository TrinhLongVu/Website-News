import React, { useState, useEffect } from "react";
import "./admin-priority.css";
import AdminArticle from "../../Components/Admin/AdminArticle/AdminArticle";
import Loader from "../../Components/Loader/Loader";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminPriority = () => {
  const [articleList, setArticleList] = useState([]);
  const [topArticles, setTopArticles] = useState([]);
  const [change, setChange] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("http://localhost:8000/api/v1/article/")
      .then((res) => res.json())
      .then((json) => {
        setArticleList(json.data);
      });
  }, [change]);

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
      setArticleList((prevArticleList) =>
        prevArticleList.filter((article) => article._id !== draggedArticle._id)
      );
      setTopArticles((prevTopArticles) => [...prevTopArticles, draggedArticle]);
    } else if (target === "articleList") {
      setTopArticles((prevTopArticles) =>
        prevTopArticles.filter((article) => article._id !== draggedArticle._id)
      );
      setArticleList((prevArticleList) => [...prevArticleList, draggedArticle]);
    }
  };

  const handleSaveClick = async () => {
    let idStr = "";
    topArticles.forEach((article, index) => {
      idStr += article._id;
      if (index < topArticles.length - 1) {
        idStr += ",";
      }
    });
    try {
      setLoading(true);
      const response = await fetch(
        "http://localhost:8000/api/v1/article/set/priority",
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: idStr,
          }),
        }
      );
      const data = await response.json();
      if (data.status === "success") {
        setChange(!change);
        toast.success(
          `Successfully displayed ${topArticles.length} articles in the "Most Read" section`,
          {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          }
        );
        setTopArticles([]);
        setLoading(false);
      }
    } catch (error) {
      toast.error("Something's error. Please try again later", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  const handleCancelClick = () => {
    setTopArticles([]);
    setChange(!change);
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
              <div
                key={article.idx}
                draggable
                onDragStart={(e) => handleDragStart(e, article, "topArticles")}
              >
                <AdminArticle article={article} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="admin-save-cancel-btn-container">
        {loading ? (
          <Loader />
        ) : (
          <>
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
          </>
        )}
      </div>
    </>
  );
};

export default AdminPriority;
