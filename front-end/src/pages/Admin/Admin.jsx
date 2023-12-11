import React from "react";
import ArticleCard from "../../Components/ArticleCard/ArticleCard";
import image from "../../assets/tech-tag.jpeg";
import "./admin.css";

const Admin = () => {
  const exampleArticle = {
    thumbnail: image,
    title: "Opening Day of the Boating Season so let's set sail",
    content:
      "The text-overflow property specifies how overflowed content that is not displayed should be signaled to the user. It can display a lot of contnet dmnakwdnj dan",
    author: {
      name: "James adnaklndnadkjn",
      avatar: "https://picsum.photos/200/300",
    },
    time: "2 hours ago",
  };


  return (
    <>
      <div className="admin-container">
        <div className="admin-header">
          <div className="admin-logo">
            THE MEGA PAPERS
          </div>
          <div className="admin-avt"></div>
        </div>

        <div className="admin-navbar-content">
          <div className="admin-navbar">
            <div className="admin-category">Priority</div>
            <div className="admin-category">Ban User</div>
            <div className="admin-category">Upgrade Writer</div>
            <div className="admin-category">Report Account</div>
            <div className="admin-category">Article Statistics</div>
          </div>
          <div className="admin-content">
            <div className="priority-container">
              <div className="priority-container-left-side">
                <div className="priority-title">Articles</div>
                <div className="priority-scroll-left">
                  <div draggable="true">
                    <ArticleCard article={exampleArticle} />
                  </div>
                  <div draggable="true">
                    <ArticleCard article={exampleArticle} />
                  </div>
                  <div draggable="true">
                    <ArticleCard article={exampleArticle} />
                  </div>
                </div>
              </div>
              <div className="priority-container-right-side">
                <div className="priority-title">Top articles</div>
                <div className="priority-scroll-right">
                  <div draggable="true">
                    <ArticleCard article={exampleArticle} />
                  </div>
                  <div draggable="true">
                    <ArticleCard article={exampleArticle} />
                  </div>
                  <div draggable="true">
                    <ArticleCard article={exampleArticle} />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
