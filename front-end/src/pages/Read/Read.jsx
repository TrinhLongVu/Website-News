import { useState, useEffect } from "react";
import { Link, useOutletContext, useParams } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faNewspaper,
  faThumbsUp as faIsLiked,
  faBookmark as faIsSaved,
  faUserPlus,
  faUserCheck,
} from "@fortawesome/free-solid-svg-icons";
import {
  faThumbsUp as faLike,
  faBookmark as faSave,
} from "@fortawesome/free-regular-svg-icons";

import ArticleCard from "../../Components/ArticleCard/ArticleCard";
import ArticleFrame from "../../Components/Read/ArticleFrame/ArticleFrame";
import CommentSection from "../../Components/Read/CommentSection/CommentSection";

import "./read.css";
import Breadcrumbs from "../../Components/Breadcrumbs/Breadcrumbs";
const Read = () => {
  const { id } = useParams();
  const { userInfo } = useOutletContext();
  const [readingArticle, setReadingArticle] = useState({});
  const [articleCategory, setArticleCategory] = useState("");
  const [relatedArticles, setRelatedArticles] = useState([]);
  const [isFollowed, setFollow] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:8000/api/v1/article/${id}`)
      .then((res) => res.json())
      .then((json) => {
        setArticleCategory(json.data.Category[0]);
        const articleContent = json.data.Detail.split("\n");
        const fetchedArticle = {
          authorName: json.data.author_name,
          authorID: json.data.ID_author,
          authorAvt: json.data.imageAuthor,
          thumbnail: json.data.Image,
          title: json.data.Title,
          content: articleContent,
          views: json.data.view,
          time: json.data.posted_time,
        };
        setReadingArticle(fetchedArticle);
      });
  }, [id]);

  const routeList = [
    {
      name: readingArticle.title,
      link: "/article/" + id,
    },
    {
      name: articleCategory.charAt(0).toUpperCase() + articleCategory.slice(1),
      link: "/categories/" + articleCategory,
    },
    {
      name: "Categories",
      link: "/categories",
    },
  ];

  const [isLiked, setLiked] = useState(false);

  const [isSaved, setSaved] = useState(false);

  const likeArticle = () => {
    setLiked(!isLiked);
  };
  const followAuthor = async () => {
    const sentBody = {
      _id: userInfo._id,
    };
    try {
      const response = await fetch(
        `http://localhost:8000/api/v1/user/pages/${readingArticle.authorID}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(sentBody),
        }
      );
      const data = await response.json();
      if (data.status === "success") {
        setFollow(!isFollowed);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const saveArticle = () => {
    setSaved(!isSaved);
  };

  useEffect(() => {
    fetch(
      `http://localhost:8000/api/v1/article/page/pagination?page=1&limit=3&category=${articleCategory}`
    )
      .then((res) => res.json())
      .then((json) => {
        const fetchedArray = json.data;
        const updatedArray = fetchedArray.filter(
          (article) => article._id !== id
        );
        setRelatedArticles(updatedArray);
      });
  }, [articleCategory, id]);

  return (
    <>
      <Breadcrumbs crumbList={routeList} />
      <div className="read-page">
        <div className="read-page-left">
          <ArticleFrame publishArticle={readingArticle} />
          <CommentSection articleId={id} />
        </div>
        <div className="read-page-right">
          <Link
            to={`/writer/${readingArticle.authorID}`}
            className="read-author-box"
          >
            <div
              className="read-author-avt"
              style={{ backgroundImage: `url(${readingArticle.authorAvt})` }}
            ></div>
            <div className="read-author-info">
              <div className="read-author-name">
                {readingArticle.authorName}
              </div>
              <div className="read-author-follow">18.6k Followers</div>
            </div>
          </Link>
          <div className="read-btn-box">
            <div className="btn-like" onClick={likeArticle}>
              <FontAwesomeIcon icon={isLiked ? faIsLiked : faLike} />
            </div>
            <div className="btn-subscribe" onClick={followAuthor}>
              <FontAwesomeIcon icon={isFollowed ? faUserCheck : faUserPlus} />
            </div>
            <div className="btn-save" onClick={saveArticle}>
              <FontAwesomeIcon icon={isSaved ? faIsSaved : faSave} />
            </div>
          </div>
          <div className="related-article-title">
            <FontAwesomeIcon icon={faNewspaper} id="related-title-icon" />
            Related Articles
          </div>
          <div className="related-article-container">
            {relatedArticles.map((article, index) => (
              <ArticleCard key={index} article={article} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Read;
