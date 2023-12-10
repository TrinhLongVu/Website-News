import { useState } from "react";

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
import image from "../../assets/tech-tag.jpeg";
import ArticleFrame from "../../Components/Read/ArticleFrame/ArticleFrame";
import CommentSection from "../../Components/Read/CommentSection/CommentSection";

import "./read.css";
const Read = () => {
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
  const [isLiked, setLiked] = useState(false);
  const [isFollowed, setFollow] = useState(false);
  const [isSaved, setSaved] = useState(false);

  const likeArticle = () => {
    setLiked(!isLiked);
  };
  const followAuthor = () => {
    setFollow(!isFollowed);
  };
  const saveArticle = () => {
    setSaved(!isSaved);
  };

  return (
    <>
      <div className="read-page">
        <div className="read-page-left">
          <ArticleFrame />
          <CommentSection isAuthenticated={false} />
        </div>
        <div className="read-page-right">
          <a href="" className="read-author-box">
            <div className="read-author-avt"></div>
            <div className="read-author-info">
              <div className="read-author-name">Simon Gin</div>
              <div className="read-author-follow">18.6k Followers</div>
            </div>
          </a>
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
            <ArticleCard article={exampleArticle} />
            <ArticleCard article={exampleArticle} />
            <ArticleCard article={exampleArticle} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Read;
