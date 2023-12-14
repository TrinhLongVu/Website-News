import React, { useState } from "react";
import "./admin-article-statistics.css";

const AdminArticleStatistics = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("month");

  // State to store data for different time periods
  const dataByMonth = {
    totalUsers: 3210,
    totalViews: 32321,
    totalPublished: 123,
  };

  const dataByYear = {
    totalUsers: 5432,
    totalViews: 51232,
    totalPublished: 345,
  };
  const selectedData = selectedPeriod === "month" ? dataByMonth : dataByYear;

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
                  {selectedData.totalUsers}
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
                  {selectedData.totalViews}
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
                  {selectedData.totalPublished}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="article-statistics-button-container">
          <button
            className={`article-statistics-button ${
              selectedPeriod === "month" ? "selected" : ""
            }`}
            onClick={() => setSelectedPeriod("month")}
          >
            By Month
          </button>
          <button
            className={`article-statistics-button ${
              selectedPeriod === "year" ? "selected" : ""
            }`}
            onClick={() => setSelectedPeriod("year")}
          >
            By Year
          </button>
        </div>
      </div>
    </>
  );
};

export default AdminArticleStatistics;
