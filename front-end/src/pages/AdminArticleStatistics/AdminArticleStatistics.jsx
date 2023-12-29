import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import "./admin-article-statistics.css";

const AdminArticleStatistics = () => {
  const [statistics, setStatistics] = useState({});
  const [chartData, setChartData] = useState({});
  const [displayUsersChart, setDisplayUsersChart] = useState(false);
  const [displayViewsChart, setDisplayViewsChart] = useState(false);
  const [displayPublishedChart, setDisplayPublishedChart] = useState(false);

  const fetchData = async () => {
    try {
      const [
        totalUsersResponse,
        totalArticlesResponse,
        bydayUsersResponse,
        bydayArticlesResponse,
        bydayViewsResponse
      ] = await Promise.all([
        fetch("http://localhost:8000/api/v1/user/", { credentials: "include" }),
        fetch("http://localhost:8000/api/v1/article/", { credentials: "include" }),
        fetch("http://localhost:8000/api/v1/user/admin/totalUser", { credentials: "include" }),
        fetch("http://localhost:8000/api/v1/user/admin/post", { credentials: "include" }),
        fetch("http://localhost:8000/api/v1/user/admin/view", { credentials: "include" }),
      ]);

      const [
        totalUsersJson,
        totalArticlesJson,
        bydayUsersJson,
        bydayArticlesJson,
        bydayViewJson
      ] = await Promise.all([
        totalUsersResponse.json(),
        totalArticlesResponse.json(),
        bydayUsersResponse.json(),
        bydayArticlesResponse.json(),
        bydayViewsResponse.json(),
      ]);

      const totalViewsFromArticles = totalArticlesJson.data.reduce(
        (accumulator, article) => accumulator + parseInt(article.view, 10),
        0
      );

      const fetchStatistics = {
        totalUsers: totalUsersJson.data.length,
        totalViews: totalViewsFromArticles,
        totalPublished: totalArticlesJson.data.length,
        bydayUsers: bydayUsersJson.data,
        bydayPublished: bydayArticlesJson.data,
        bydayViews: bydayViewJson.data,
      };

      const days = fetchStatistics.bydayUsers.map((entry) => entry.day).reverse();
      const userQuantities = fetchStatistics.bydayUsers.map((entry) => entry.quantity).reverse();
      const viewQuantities = fetchStatistics.bydayViews.map((entry) => entry.quantity).reverse();
      const publishedQuantities = fetchStatistics.bydayPublished.map((entry) => entry.quantity).reverse();

      const chartDataUsers = {
        labels: days,
        datasets: [
          {
            label: "New Users",
            data: userQuantities,
            borderColor: "#007BFF",
            fill: false,
          },
        ],
      };

      const chartDataViews = {
        labels: days,
        datasets: [
          {
            label: "Views Gain",
            data: viewQuantities,
            borderColor: "#28a745",
            fill: false,
          },
        ],
      };

      const chartDataPublished = {
        labels: days,
        datasets: [
          {
            label: "New Published Articles",
            data: publishedQuantities,
            borderColor: "#FFC107",
            fill: false,
          },
        ],
      };

      setStatistics(fetchStatistics);
      setChartData({ chartDataUsers, chartDataViews, chartDataPublished });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const toggleChartVisibility = (chartType) => {
    setDisplayUsersChart(chartType === "users");
    setDisplayViewsChart(chartType === "views");
    setDisplayPublishedChart(chartType === "published");
  };

  return (
    <>
      <div className="article-statistics-container">
        <div className="article-statistics-row">
          <div className="article-statistics-col">
            <div className="article-statistics-card" onClick={() => toggleChartVisibility("users")}>
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
            <div className="article-statistics-card" onClick={() => toggleChartVisibility("views")}>
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
            <div className="article-statistics-card" onClick={() => toggleChartVisibility("published")}>
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

        {displayUsersChart && (
          <div className="line-chart-container">
            {chartData && chartData.chartDataUsers && chartData.chartDataUsers.labels ? (
              <Line data={chartData.chartDataUsers}  />
            ) : (
              <p>Loading chart...</p>
            )}
          </div>
        )}

        {displayViewsChart && (
          <div className="line-chart-container">
            {chartData && chartData.chartDataViews && chartData.chartDataViews.labels ? (
              <Line data={chartData.chartDataViews}  />
            ) : (
              <p>Loading chart...</p>
            )}
          </div>
        )}

        {displayPublishedChart && (
          <div className="line-chart-container">
            {chartData && chartData.chartDataPublished && chartData.chartDataPublished.labels ? (
              <Line data={chartData.chartDataPublished}  />
            ) : (
              <p>Loading chart...</p>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default AdminArticleStatistics;

