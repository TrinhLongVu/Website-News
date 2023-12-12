import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCommentSlash,
  faComments,
  faPaperPlane,
  faUserXmark,
} from "@fortawesome/free-solid-svg-icons";

import "./cmt-section.css";

const CommentSection = ({ articleComments, isAuthenticated }) => {
  const [commentInput, setCommentInput] = useState("");
  const [comments, setComments] = useState(articleComments);

  const sendComment = (event) => {
    const cmtInput = document.querySelector(".cmt-input-field");
    cmtInput.style.height = "auto";
    cmtInput.style.width = "90%";
    if (commentInput.trim() !== "") {
      setComments((prevComments) => [...prevComments, commentInput]);
      setCommentInput("");
    }
  };

  const autoResize = (event) => {
    const cmtInput = event.target;
    cmtInput.style.overflow = "hidden";
    cmtInput.style.height = "auto";
    cmtInput.style.height = `${cmtInput.scrollHeight}px`;
    if (cmtInput.value === "") {
      cmtInput.style.width = "90%";
    } else {
      cmtInput.style.width = "86%";
    }
  };

  return (
    <>
      <div className="cmt-section">
        <div className="cmt-cnt">
          <FontAwesomeIcon icon={faComments} id="cmt-icon" />
          {comments.length > 0 && comments.length} Comments
        </div>
        {isAuthenticated ? (
          <div className="cmt-input-box">
            <a href="#" className="cmt-avt"></a>
            <textarea
              className="cmt-input-field"
              placeholder="What do you think?"
              value={commentInput}
              readOnly={!isAuthenticated}
              onChange={(e) => {
                setCommentInput(e.target.value);
                autoResize(e);
              }}
            ></textarea>
            {commentInput !== "" && (
              <div
                className="send-cmt-btn"
                onClick={(e) => {
                  sendComment(e);
                }}
              >
                <FontAwesomeIcon icon={faPaperPlane} />
              </div>
            )}
          </div>
        ) : (
          <div className="msg-box">
            <FontAwesomeIcon icon={faUserXmark} className="msg-icon" />
            <div>Looks like your forgot to login!!!</div>
            <div>Please login to share your thoughts about this article!!!</div>
          </div>
        )}
        <hr class="cmt-hr" />
        {comments.length === 0 ? (
          <div className="msg-box">
            <FontAwesomeIcon icon={faCommentSlash} className="msg-icon" />
            <div>Looks like there are no comments on this article yet!!!</div>
            <div>Be the first to comment!</div>
          </div>
        ) : (
          comments.map((comment, idx) => (
            <div key={idx} className="other-cmt-box">
              <div className="other-cmt-info">
                <div className="cmt-avt"></div>
                <h3 className="user-name">Simon Gin</h3>
              </div>
              <div className="other-cmt-content">{comment}</div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default CommentSection;
