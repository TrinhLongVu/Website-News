import { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNewspaper } from "@fortawesome/free-regular-svg-icons";

import ArticleShelf from "../../Components/AricleShelf/ArticleShelf";

import "./writer-user.css";
import Breadcrumbs from "../../Components/Breadcrumbs/Breadcrumbs";
const Written = () => {
  const [articleList, setArticleList] = useState([]);

  //   useEffect(() => {
  //     fetch("http://localhost:8000/api/v1/article/search/" + word)
  //       .then((res) => res.json())
  //       .then((json) => {
  //         setArticleList(json.data);
  //       });
  //   }, []);
  return (
    <>
      <Breadcrumbs
        crumbList={[{ name: "Your Written Articles", link: "/user/written" }]}
      />
      {articleList.length !== 0 ? (
        <>{articleList && <ArticleShelf articles={articleList} />}</>
      ) : (
        <>
          <div className="no-res-msg-box">
            <FontAwesomeIcon icon={faNewspaper} className="msg-icon" />
            <div>Looks like you haven't saved any articles yet!</div>
            <div>Let's find your favorite by reading some of them!!!</div>
          </div>
        </>
      )}
    </>
  );
};

export default Written;
