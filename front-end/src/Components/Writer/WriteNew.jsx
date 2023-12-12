import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPen,
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
  const [articleTitle, setArticleTitle] = useState("");
  const [contentField, setContentField] = useState("");
  const [previewArticle, setPreviewArticle] = useState(null);
  const handleFieldChange = (event) => {
    setContentField(event.target.value);
  };

  const [previewThumbnail, setPreviewThumbnail] = useState(null);
  const [thumbnail, setThumbnail] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setThumbnail(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewThumbnail(reader.result);
      };
      reader.readAsDataURL(file);
    }
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
      thumbnail: thumbnail,
      title: articleTitle,
      content: articleContent,
      time: formattedTimestamp,
    };
    setPreviewArticle(newArticle);
  };

  const giveIdea = async () => {
    const ideaBody = {
      category: selectedCategory,
      ideas: contentField,
    };
    try {
      const response = await fetch("http://localhost:8000/api/v1/articleAI", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(ideaBody),
      });
      const data = await response.json();
      document.querySelector(".write-new-input").value =
        data.data.article.title;
      document.querySelector(".write-new-textarea").value =
        data.data.article.introduction;
      setContentField(data.data.article.introduction);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const createNewArticle = async () => {
    const formData = new FormData();
    formData.append("title", articleTitle);
    formData.append("content", contentField);
    formData.append("category", selectedCategory);
    formData.append("image", thumbnail);
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
                onChange={(e) => setArticleTitle(e.target.value)}
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
          <div className="write-new-idea">
            <div
              className="write-new-control-item"
              id="write-new-give-idea"
              onClick={giveIdea}
            >
              <FontAwesomeIcon icon={faPen} className="write-new-control-ico" />
              Generate Paragraph
            </div>
          </div>
        </div>
        <div className="write-new-right">
          Thumbnail
          <div className="write-new-thumbnail">
            <div
              className="write-new-thumbnail-frame"
              style={{ backgroundImage: `url(${previewThumbnail})` }}
            >
              {!previewThumbnail && (
                <div className="write-new-thumbnail-text">
                  Add a thumbnail for your article
                </div>
              )}
            </div>
            <label for="file-upload" class="write-new-thumbnail-upload">
              Choose file
            </label>
            <input type="file" id="file-upload" onChange={handleImageChange} />
          </div>
          <div className="write-new-control">
            <div className="write-new-control-item" onClick={handlePreview}>
              <FontAwesomeIcon icon={faEye} className="write-new-control-ico" />
              Preview
            </div>
            <div
              className="write-new-control-item"
              id="write-new-control-publish"
              onClick={createNewArticle}
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
