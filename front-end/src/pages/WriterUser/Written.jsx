import { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNewspaper } from "@fortawesome/free-regular-svg-icons";

import ArticleShelf from "../../Components/AricleShelf/ArticleShelf";

import "./writer-user.css";
import Breadcrumbs from "../../Components/Breadcrumbs/Breadcrumbs";
const Written = () => {
  const [userInfo, setUserInfo] = useState({});
  const [articleList, setArticleList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/v1/user/account/success", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((json) => {
        setUserInfo(json.body);
      });
  }, []);

  useEffect(() => {
    fetch(`http://localhost:8000/api/v1/user/article/${userInfo._id}`)
      .then((res) => res.json())
      .then((json) => {
        setArticleList(json.data);
      });
  }, [userInfo]);
  return (
    <>
      <Breadcrumbs
        crumbList={[{ name: "Written Articles", link: "/user/written" }]}
      />
      {articleList.length !== 0 ? (
        <>{articleList && <ArticleShelf articles={articleList} />}</>
      ) : (
        <>
          <div className="no-res-msg-box">
            <FontAwesomeIcon icon={faNewspaper} className="msg-icon" />
            <div>Looks like you haven't written any articles yet!</div>
            <div>Let's write your first articles for the platform!!!</div>
          </div>
        </>
      )}
    </>
  );
};

export default Written;
