import { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCommentSlash,
  faComments,
  faPaperPlane,
  faUserXmark,
} from "@fortawesome/free-solid-svg-icons";

import "./cmt-section.css";
import { useOutletContext } from "react-router-dom";

const CommentSection = ({ articleId }) => {
  const { userInfo } = useOutletContext();
  const [comments, setComments] = useState([]);
  const [commentInput, setCommentInput] = useState("");
  const [sentCmt, setSentCmt] = useState(false);
  useEffect(() => {
    fetch(`http://localhost:8000/api/v1/article/${articleId}`)
      .then((res) => res.json())
      .then((json) => {
        setComments(json.data.comments);
      });
  }, [sentCmt, articleId]);

  const sendComment = async (event) => {
    const cmtContent = document.querySelector(".cmt-input-field").value;
    try {
      const response = await fetch(
        `http://localhost:8000/api/v1/article/${articleId}`,
        {
          credentials: "include",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id_user: userInfo._id,
            content: cmtContent,
          }),
        }
      );
      const data = await response.json();
      if (data.data) {
        setSentCmt(!sentCmt);
      }
    } catch (error) {
      console.error(error);
    }
    const cmtInput = document.querySelector(".cmt-input-field");
    cmtInput.style.height = "auto";
    cmtInput.style.width = "90%";
    if (commentInput.trim() !== "") {
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
        {userInfo ? (
          <div className="cmt-input-box">
            <div
              className="cmt-avt"
              style={{ backgroundImage: `url(${userInfo.Image_Avatar})` }}
            ></div>
            <textarea
              className="cmt-input-field"
              placeholder="What do you think?"
              value={commentInput}
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
        <hr className="cmt-hr" />
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
                <div
                  className="cmt-avt"
                  style={{ backgroundImage: `url(${comment.image})` }}
                ></div>
                <h3 className="user-name">{comment.username}</h3>
              </div>
              <div className="other-cmt-content">{comment.content}</div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default CommentSection;
