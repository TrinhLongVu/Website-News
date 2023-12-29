import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./writer.css";
import {
  faBan,
  faUserPlus,
  faUserCheck,
} from "@fortawesome/free-solid-svg-icons";
import ArticleShelf from "../../Components/AricleShelf/ArticleShelf";
import { useState, useEffect } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import Breadcrumbs from "../../Components/Breadcrumbs/Breadcrumbs";

const Writer = () => {
  const { id } = useParams();
  const { userInfo, userChange, changeUser } = useOutletContext();
  const [writerInfo, setWriterInfo] = useState(null);
  const [writtenArticles, setWrittenArticles] = useState([]);
  const [isFollowed, setFollow] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:8000/api/v1/user/${id}`)
      .then((res) => res.json())
      .then((json) => {
        setWriterInfo(json.data);
        if (userInfo && userInfo.ID_follow_writer) {
          const foundID = userInfo.ID_follow_writer.find(
            (id) => id === writerInfo._id
          );
          if (foundID) {
            setFollow(true);
          } else {
            setFollow(false);
          }
        }
      });
  }, [id]);
  useEffect(() => {
    fetch(`http://localhost:8000/api/v1/user/article/${id}`)
      .then((res) => res.json())
      .then((json) => {
        setWrittenArticles(json.data);
      });
  }, [id]);

  const followAuthor = async () => {
    const sentBody = {
      _id: userInfo._id,
    };
    try {
      const response = await fetch(
        `http://localhost:8000/api/v1/user/pages/${writerInfo._id}`,
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
        changeUser(!userChange);
        setFollow(!isFollowed);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <Breadcrumbs
        crumbList={[{ name: `${writerInfo?.FullName}`, link: `/writer/${id}` }]}
      />
      <div className="writer-banner">
        <div className="writer-banner-info">
          <div
            className="writer-banner-avt"
            style={{ backgroundImage: `url(${writerInfo?.Image_Avatar})` }}
          ></div>
          <div className="writer-banner-detail">
            <div className="writer-banner-name">{writerInfo?.FullName}</div>
            <div className="writer-banner-follow-num">1863 Followers</div>
          </div>
        </div>
        <div className="writer-banner-action">
          <div
            className="writer-banner-btn"
            id="writer-follow"
            onClick={followAuthor}
          >
            <FontAwesomeIcon icon={isFollowed ? faUserCheck : faUserPlus} />
          </div>
          <div className="writer-banner-btn" id="writer-ban">
            <FontAwesomeIcon icon={faBan} />
          </div>
        </div>
      </div>
      <div className="writer-content">
        <ArticleShelf articles={writtenArticles} />
      </div>
    </>
  );
};

export default Writer;
