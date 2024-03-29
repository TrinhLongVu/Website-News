import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPen,
  faEye,
  faPaperPlane,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";

import { categoryList } from "../../Global";
import { useState, useEffect } from "react";
import "./write.css";
import ArticleFrame from "../../Components/Read/ArticleFrame/ArticleFrame";
import Breadcrumbs from "../../Components/Breadcrumbs/Breadcrumbs";
import Loader from "../../Components/Loader/Loader";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Write = () => {
  const [showList, setShowList] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [userInfo, setUserInfo] = useState(null);
  const [loadIdea, setLoadIdea] = useState(false);
  const [publishing, setPublishing] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8000/api/v1/user/account/success", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.body && json.body.Role === "writer") {
          setUserInfo(json.body);
        } else {
          navigate("/");
        }
      });
  }, []);

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
      thumbnail: previewThumbnail,
      title: articleTitle,
      content: articleContent,
      time: formattedTimestamp,
    };
    setPreviewArticle(newArticle);
  };

  const giveIdea = async () => {
    setLoadIdea(true);
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
      setLoadIdea(false);
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
    let formData = new FormData();
    formData.append("Title", articleTitle);
    formData.append("Detail", contentField);
    formData.append("Category", selectedCategory.toLowerCase());
    formData.append("ID_author", userInfo._id);
    formData.append("image", thumbnail);
    try {
      setPublishing(true);
      const response = await fetch("http://localhost:8000/api/v1/article", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        toast.success("Your new article has been published!!!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        document.querySelector(".write-new-input").value = "";
        document.querySelector(".write-new-textarea").value = "";
        document.querySelector(".write-new-select-title").style.color =
          "#3e3232";
        document.querySelector(".write-new-select-title").style.opacity =
          "0.75";
        setSelectedCategory("");
        setThumbnail(null);
        setPreviewThumbnail(null);
        setPreviewArticle(null);
      } else {
        toast.error(
          "Looks like you haven't input enough information for your new article",
          {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          }
        );
      }
    } catch (error) {
      console.error("Error:", error);
    }
    setPublishing(false);
  };

  return (
    <>
      <Breadcrumbs crumbList={[{ name: "Write", link: "/user/write" }]} />
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
                onChange={(e) => setContentField(e.target.value)}
              ></textarea>
            </div>
          </div>
          <div className="write-new-idea">
            <div
              className="write-new-control-item"
              id="write-new-give-idea"
              onClick={giveIdea}
            >
              {loadIdea ? (
                <Loader />
              ) : (
                <>
                  <FontAwesomeIcon
                    icon={faPen}
                    className="write-new-control-ico"
                  />
                  Generate Paragraph
                </>
              )}
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
            <label htmlFor="file-upload" className="write-new-thumbnail-upload">
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
              {publishing ? (
                <Loader />
              ) : (
                <>
                  <FontAwesomeIcon
                    icon={faPaperPlane}
                    className="write-new-control-ico"
                  />
                  Publish
                </>
              )}
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

export default Write;
