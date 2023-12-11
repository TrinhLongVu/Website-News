import { useEffect, useState, useRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

import "./article-slider.css";

import { calcTime } from "../../../Global";

const ArticleSlider = () => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      if (sliderRef.current.scrollLeft === 0) {
        sliderRef.current.scrollLeft = sliderRef.current.scrollWidth;
      } else {
        sliderRef.current.scrollBy({
          left: -sliderRef.current.offsetWidth,
          behavior: "smooth",
        });
      }
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      const maxScrollLeft =
        sliderRef.current.scrollWidth - sliderRef.current.offsetWidth;

      if (sliderRef.current.scrollLeft === maxScrollLeft) {
        sliderRef.current.scrollLeft = 0;
      } else {
        sliderRef.current.scrollBy({
          left: sliderRef.current.offsetWidth,
          behavior: "smooth",
        });
      }
    }
  };

  const [articleList, setArticleList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/v1/article/top/priority?limit=5")
      .then((res) => res.json())
      .then((json) => {
        setArticleList(json.data);
      });
  }, []);

  return (
    <div className="article-slider-wrapper">
      <div className="article-slider" ref={sliderRef}>
        {articleList.map((article, idx) => (
          <div
            key={idx}
            className="article-slider-item"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.25)), url(${article.Image})`,
            }}
          >
            <h2>{article.Title}</h2>
            <h4>{article.ID_author}</h4>
            <h5>{calcTime(article.posted_time)}</h5>
          </div>
        ))}
        <div className="article-slider-btn slider-left" onClick={scrollLeft}>
          <FontAwesomeIcon icon={faAngleLeft} />
        </div>
        <div className="article-slider-btn slider-right" onClick={scrollRight}>
          <FontAwesomeIcon icon={faAngleRight} />
        </div>
      </div>
    </div>
  );
};

export default ArticleSlider;
