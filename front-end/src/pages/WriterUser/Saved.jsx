import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";

import Breadcrumbs from "../../Components/Breadcrumbs/Breadcrumbs";
import ArticleShelf from "../../Components/AricleShelf/ArticleShelf";

import "./writer-user.css";
const Saved = () => {
  const { userInfo } = useOutletContext();
  const [articleList, setArticleList] = useState([]);

  useEffect(() => {
    const fetchSavedArticles = async () => {
      try {
        if (userInfo) {
          const response = await fetch(
            `http://localhost:8000/api/v1/user/getsavearticle/${userInfo._id}`
          );
          const json = await response.json();
          setArticleList(json.list_saved_Articles);
        }
      } catch (error) {
        console.error("Error fetching saved articles:", error.message);
      }
    };

    fetchSavedArticles();
  }, [userInfo]);

  return (
    <>
      <Breadcrumbs
        crumbList={[{ name: "Saved Articles", link: "/user/saved" }]}
      />
      {articleList ? (
        <>{articleList.length > 0 && <ArticleShelf articles={articleList} />}</>
      ) : (
        <div className="no-res-msg-box">
          <FontAwesomeIcon icon={faBookmark} className="msg-icon" />
          <div>Looks like you haven't saved any articles yet!</div>
          <div>Let's find your favorite by reading some of them!!!</div>
        </div>
      )}
    </>
  );
};

export default Saved;
