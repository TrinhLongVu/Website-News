import { useState, useEffect } from "react";
import "./admin.css";
import AdminArticle from "../../Components/Admin/AdminArticle/AdminArticle";

const Admin = () => {
  const [articleList, setArticleList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/v1/article/")
      .then((res) => res.json())
      .then((json) => {
        console.log(json.data);
        setArticleList(json.data);
      });
  }, []);

  return (
    <>
      <div className="priority-container">
        <div className="priority-container-side">
          <div className="priority-title">Articles</div>
          <div className="priority-scroll-left">
            {articleList.map((article, idx) => (
              <div draggable="true">
                <AdminArticle key={idx} article={article} />
              </div>
            ))}
          </div>
        </div>
        <div className="priority-container-side">
          <div className="priority-title">Top articles</div>
          <div className="priority-scroll-right"></div>
        </div>
      </div>
    </>
  );
};

export default Admin;
