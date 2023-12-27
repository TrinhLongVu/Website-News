import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import "./admin-article-statistics.css";

const AdminArticleStatistics = () => {
  const [statistics, setStatistics] = useState({});
  const [chartData, setChartData] = useState({});
  const [displayUsersChart, setDisplayUsersChart] = useState(false);
  const [displayViewsChart, setDisplayViewsChart] = useState(false);
  const [displayPublishedChart, setDisplayPublishedChart] = useState(false);

  const generateData = () => {
    const weeks = ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6", "Week 7"];

    const specificData = {
      totalUsers: [10, 20, 30, 33, 40, 44, 50],
      totalViews: [2123, 4056, 12692, 23098, 38690, 50210, 60373],
      totalPublished: [2, 4, 11, 17, 33, 54, 60],
    };

    setStatistics(specificData);

    // Prepare data for Chart.js
    const chartDataUsers = {
      labels: weeks,
      datasets: [
        {
          label: "Total Users",
          data: specificData.totalUsers,
          borderColor: "#007BFF",
          fill: false,
        },
      ],
    };

    const chartDataViews = {
      labels: weeks,
      datasets: [
        {
          label: "Total Views",
          data: specificData.totalViews,
          borderColor: "#28a745",
          fill: false,
        },
      ],
    };

    const chartDataPublished = {
      labels: weeks,
      datasets: [
        {
          label: "Total Published",
          data: specificData.totalPublished,
          borderColor: "#FFC107",
          fill: false,
        },
      ],
    };

    setChartData({ chartDataUsers, chartDataViews, chartDataPublished });
  };

  useEffect(() => {
    generateData();
  }, []);

  const toggleChartVisibility = (chartType) => {
    switch (chartType) {
      case "users":
        setDisplayUsersChart(true);
        setDisplayViewsChart(false);
        setDisplayPublishedChart(false);
        break;
      case "views":
        setDisplayUsersChart(false);
        setDisplayViewsChart(true);
        setDisplayPublishedChart(false);
        break;
      case "published":
        setDisplayUsersChart(false);
        setDisplayViewsChart(false);
        setDisplayPublishedChart(true);
        break;
      default:
        break;
    }
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
                  {statistics.totalUsers && statistics.totalUsers.length > 0
                    ? statistics.totalUsers[statistics.totalUsers.length - 1]
                    : 'N/A'}
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
                  {statistics.totalViews && statistics.totalViews.length > 0
                    ? statistics.totalViews[statistics.totalViews.length - 1]
                    : 'N/A'}
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
                  {statistics.totalPublished && statistics.totalPublished.length > 0
                    ? statistics.totalPublished[statistics.totalPublished.length - 1]
                    : 'N/A'}
                </div>
              </div>
            </div>
          </div>
        </div>

        {displayUsersChart && (
          <div className="line-chart-container">
            {chartData && chartData.chartDataUsers && chartData.chartDataUsers.labels ? (
              <Line data={chartData.chartDataUsers} options={{ scales: { x: [{ type: 'linear', position: 'bottom' }] } }} />
            ) : (
              <p>Loading chart...</p>
            )}
          </div>
        )}

        {displayViewsChart && (
          <div className="line-chart-container">
            {chartData && chartData.chartDataViews && chartData.chartDataViews.labels ? (
              <Line data={chartData.chartDataViews} options={{ scales: { x: [{ type: 'linear', position: 'bottom' }] } }} />
            ) : (
              <p>Loading chart...</p>
            )}
          </div>
        )}

        {displayPublishedChart && (
          <div className="line-chart-container">
            {chartData && chartData.chartDataPublished && chartData.chartDataPublished.labels ? (
              <Line data={chartData.chartDataPublished} options={{ scales: { x: [{ type: 'linear', position: 'bottom' }] } }} />
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
