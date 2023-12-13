import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import ArticleShelf from "../../Components/AricleShelf/ArticleShelf";

import "./search.css";
import Breadcrumbs from "../../Components/Breadcrumbs/Breadcrumbs";
const Search = () => {
  const { word } = useParams();

  const [articleList, setArticleList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/v1/article/search/" + word)
      .then((res) => res.json())
      .then((json) => {
        setArticleList(json.data);
      });
  }, [word]);
  return (
    <>
      <Breadcrumbs crumbList={[{ name: "Search", link: `/search/${word}` }]} />
      {articleList.length !== 0 ? (
        <>
          <div className="srch--title">Search results for: "{word}"</div>
          {articleList && <ArticleShelf articles={articleList} />}
        </>
      ) : (
        <>
          <div className="no-res-msg-box">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="msg-icon" />
            <div>Looks like there are no articles fit with your search!</div>
            <div>Try using different keywords or check your spelling.</div>
          </div>
        </>
      )}
    </>
  );
};

export default Search;
