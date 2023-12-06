import React, { useState, useEffect, useRef } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faUserPlus,
  faBookmark,
  faComment,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import ArticleCard from "../../Components/ArticleCard/ArticleCard";
import image from "../../assets/tech-tag.jpeg";
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

  const [commentInput, setCommentInput] = useState("");
  const [comments, setComments] = useState([]);

  const handleCommentInputChange = (e) => {
    setCommentInput(e.target.value);
  };

  const handleSendClick = () => {
    if (commentInput.trim() !== "") {
      setComments((prevComments) => [...prevComments, commentInput]);
      setCommentInput("");
    }
  };

  const handleAutoResize = (event) => {
    const textarea = event.target;
    textarea.style.overflow = "hidden";
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  useEffect(() => {
    // Resize readonly textarea when comments change
    comments.forEach((comment, index) => {
      const readonlyTextarea = document.getElementById(
        `readonlyTextarea${index}`
      );
      if (readonlyTextarea) {
        readonlyTextarea.style.height = "auto";
        readonlyTextarea.style.height = `${readonlyTextarea.scrollHeight}px`;
      }
    });
  }, [comments]);
  return (
    <>
      <Header />

      <div className="container">
        <div className="left-side">
          <div className="article"></div>
          <div className="comment-container">
            <h2 className="comment-count">
              1.863 Comments <FontAwesomeIcon icon={faComment} />
            </h2>
            {/* <h2 className="comment-count">
              {comments.length} Comments <FontAwesomeIcon icon={faComment} />
            </h2> */}
            <div className="comment-input-container">
              <div className="user-avt"></div>
              <textarea
                className="comment-input-box"
                placeholder="What do you think?"
                value={commentInput}
                onChange={(e) => {
                  handleCommentInputChange(e);
                  handleAutoResize(e);
                }}
              ></textarea>
              {commentInput.trim() !== "" && (
                <FontAwesomeIcon
                  icon={faPaperPlane}
                  className="send-icon"
                  onClick={handleSendClick}
                />
              )}
            </div>
            <div className="comment-section">
              {/* Render existing comments */}
              <div className="comment-box">
                <div className="avt-and-name">
                  <div className="user-avt"></div>
                  <h3 className="user-name">Zacky Kin</h3>
                </div>

                <textarea
                  className="comment-input-box-readonly"
                  value="Can't wait to see how Netflix Chopper's Adaption!!! This is such a great Series"
                  readOnly
                ></textarea>
              </div>

              {/* Render new comments */}
              {comments.map((comment, index) => (
                <div key={index} className="comment-box">
                  <div className="avt-and-name">
                    <div className="user-avt"></div>
                    <h3 className="user-name">Simon Gin</h3>
                  </div>

                  <textarea
                    id={`readonlyTextarea${index}`}
                    className="comment-input-box-readonly"
                    value={comment}
                    readOnly
                  ></textarea>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="right-side">
          <div className="author-bar">
            <div className="author-avt"></div>
            <div className="author-info">
              <div className="author-username">Simon Gin</div>
              <div className="author-subsriber">18.6k Subscibers</div>
            </div>
          </div>

          <div className="button-container">
            <div className="btn-like">
              <FontAwesomeIcon icon={faThumbsUp} />
            </div>
            <div className="btn-subscribe">
              <FontAwesomeIcon icon={faUserPlus} />
            </div>
            <div className="btn-save">
              <FontAwesomeIcon icon={faBookmark} />
            </div>
          </div>

          <div className="related-article-container">
            <div className="related-article-title">Related Topics</div>
            <div className="article-container">
              <ArticleCard article={exampleArticle} />
              <ArticleCard article={exampleArticle} />
              <ArticleCard article={exampleArticle} />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Read;
