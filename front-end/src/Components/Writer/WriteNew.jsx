import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFloppyDisk,
  faEye,
  faPaperPlane,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";

import { categoryList } from "../../Global";
import { useState } from "react";
import "./write-new.css";
import ArticleFrame from "../Read/ArticleFrame/ArticleFrame";

const WriteNew = () => {
  const [showList, setShowList] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const toggleList = () => {
    setShowList(!showList);
    if (!showList) {
      document.querySelector(".write-new-select").style.borderRadius =
        "15px 15px 0 0";
    } else {
      document.querySelector(".write-new-select").style.borderRadius = "15px";
    }
  };

  const handleCategoryClick = (categoryName) => {
    document.querySelector(".write-new-select-title").style.color = "black";
    document.querySelector(".write-new-select-title").style.opacity = "1";
    setSelectedCategory(categoryName);
    toggleList();
  };
  const [contentField, setContentField] = useState("");
  const [previewArticle, setPreviewArticle] = useState(null);
  const handleFieldChange = (event) => {
    setContentField(event.target.value);
  };

  const handlePreview = () => {
    const paragraphs = contentField.split("\n");
    const articleTitle = document.querySelector(".write-new-input").value;
    const articleContent = paragraphs;
    const postedTime = new Date();
    const timeString = postedTime.toLocaleTimeString([], {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
    const dateString = postedTime.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

    const formattedTimestamp = `${timeString}, ${dateString.toUpperCase()}`;
    const newArticle = {
      title: articleTitle,
      content: articleContent,
      time: formattedTimestamp,
    };
    setPreviewArticle(newArticle);
  };

  return (
    <>
      <div className="write-new">
        <div className="write-new-left">
          <div className="write-new-info">
            <div className="write-new-info-side" id="write-new-title">
              Title
              <input
                type="text"
                placeholder="What is your article's title?"
                className="write-new-input"
              />
            </div>
            <div className="write-new-info-side" id="write-new-category">
              Category
              <div className="write-new-select">
                <div className="write-new-select-title">
                  {selectedCategory
                    ? selectedCategory
                    : "Choose category for your article"}
                  <FontAwesomeIcon
                    icon={faAngleDown}
                    id="write-new-show-list-icon"
                    onClick={toggleList}
                  />
                </div>
                {showList && (
                  <div className="write-new-select-list">
                    {categoryList.map((category, index) => (
                      <div
                        to={category.link}
                        key={index}
                        onClick={() => handleCategoryClick(category.name)}
                      >
                        {category.name}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="write-new-content">
            Content
            <div className="write-new-content-container">
              <textarea
                className="write-new-textarea"
                placeholder="Write your article here..."
                onChange={handleFieldChange}
              ></textarea>
            </div>
          </div>
        </div>
        <div className="write-new-right">
          Thumbnail
          <div className="write-new-thumbnail"></div>
          <div className="write-new-control">
            <div className="write-new-control-item">
              <FontAwesomeIcon
                icon={faFloppyDisk}
                className="write-new-control-ico"
              />
              Draft
            </div>
            <div className="write-new-control-item" onClick={handlePreview}>
              <FontAwesomeIcon icon={faEye} className="write-new-control-ico" />
              Preview
            </div>
            <div
              className="write-new-control-item"
              id="write-new-control-publish"
            >
              <FontAwesomeIcon
                icon={faPaperPlane}
                className="write-new-control-ico"
              />
              Publish
            </div>
          </div>
        </div>
      </div>
      {previewArticle && (
        <div className="write-new-preview">
          <div className="write-new-preview-frame">
            <ArticleFrame previewArticle={previewArticle} />
          </div>
        </div>
      )}
    </>
  );
};

export default WriteNew;
