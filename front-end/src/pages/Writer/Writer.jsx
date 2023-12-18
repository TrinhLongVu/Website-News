import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./writer.css";
import { faBan, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import ArticleShelf from "../../Components/AricleShelf/ArticleShelf";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Writer = () => {
  const [writerInfo, setWriterInfo] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:8000/api/v1/user/${id}`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json.data);
        setWriterInfo(json.data);
      });
  }, [id]);
  return (
    <>
      <div className="writer-banner">
        <div className="writer-banner-info">
          <div
            className="writer-banner-avt"
            style={{ backgroundImage: `url(${writerInfo.Image_Avatar})` }}
          ></div>
          <div className="writer-banner-detail">
            <div className="writer-banner-name">{writerInfo.FullName}</div>
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
    </>
  );
};

export default Writer;
