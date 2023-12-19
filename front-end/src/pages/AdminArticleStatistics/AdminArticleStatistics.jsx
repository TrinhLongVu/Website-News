import { useState, useEffect } from "react";
import "./admin-article-statistics.css";

const AdminArticleStatistics = () => {
  const [statistics, setStatistics] = useState({});

  const fetchData = async () => {
    try {
      const [usersResponse, articlesResponse] = await Promise.all([
        fetch("http://localhost:8000/api/v1/user/", { credentials: "include" }),
        fetch("http://localhost:8000/api/v1/article/", {
          credentials: "include",
        }),
      ]);

      const [usersJson, articlesJson] = await Promise.all([
        usersResponse.json(),
        articlesResponse.json(),
      ]);
      const totalViewsFromArticles = articlesJson.data.reduce(
        (accumulator, article) => accumulator + parseInt(article.view, 10),
        0
      );
      const fetchStatistics = {
        totalUsers: usersJson.data.length,
        totalViews: totalViewsFromArticles,
        totalPublished: articlesJson.data.length,
      };
      setStatistics(fetchStatistics);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="article-statistics-container">
        <div className="article-statistics-row">
          <div className="article-statistics-col">
            <div className="article-statistics-card">
              <div className="article-statistics-card-body">
                <div className="article-statistics-text-xs article-statistics-font-weight-bold article-statistics-text-success article-statistics-text-uppercase mb-1">
                  Total Users
                </div>
                <div className="article-statistics-h5 article-statistics-font-weight-bold">
                  {statistics.totalUsers}
                </div>
              </div>
            </div>
          </div>
          <div className="article-statistics-col">
            <div className="article-statistics-card">
              <div className="article-statistics-card-body">
                <div className="article-statistics-text-xs article-statistics-font-weight-bold article-statistics-text-success article-statistics-text-uppercase mb-1">
                  Total Views
                </div>
                <div className="article-statistics-h5 article-statistics-font-weight-bold">
                  {statistics.totalViews}
                </div>
              </div>
            </div>
          </div>
          <div className="article-statistics-col">
            <div className="article-statistics-card">
              <div className="article-statistics-card-body">
                <div className="article-statistics-text-xs article-statistics-font-weight-bold article-statistics-text-success article-statistics-text-uppercase mb-1">
                  Total Article Published
                </div>
                <div className="article-statistics-h5 article-statistics-font-weight-bold">
                  {statistics.totalPublished}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminArticleStatistics;
