import { useRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

import "./article-slider.css";

const ArticleSlider = ({ articles }) => {
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

  return (
    <div className="article-slider-wrapper">
      <div className="article-slider" ref={sliderRef}>
        {articles.map((article, index) => (
          <div
            key={index}
            className="article-slider-item"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.25)), url(${article.thumbnail})`,
            }}
          >
            <h2>{article.title}</h2>
            <h4>{article.author.name}</h4>
            <h5>{article.time}</h5>
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
