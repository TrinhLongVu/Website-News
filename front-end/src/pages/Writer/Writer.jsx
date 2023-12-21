import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./writer.css";
import { faBan, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import ArticleShelf from "../../Components/AricleShelf/ArticleShelf";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Breadcrumbs from "../../Components/Breadcrumbs/Breadcrumbs";

const Writer = () => {
  const { id } = useParams();
  const [writerInfo, setWriterInfo] = useState(null);
  const [writtenArticles, setWrittenArticles] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:8000/api/v1/user/${id}`)
      .then((res) => res.json())
      .then((json) => {
        setWriterInfo(json.data);
      });
  }, [id]);
  useEffect(() => {
    fetch(`http://localhost:8000/api/v1/user/article/${id}`)
      .then((res) => res.json())
      .then((json) => {
        setWrittenArticles(json.data);
      });
  }, [id]);

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
          <div className="writer-banner-btn" id="writer-follow">
            <FontAwesomeIcon icon={faUserPlus} />
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
