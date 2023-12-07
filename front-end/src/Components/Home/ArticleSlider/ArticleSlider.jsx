import { useEffect, useState, useRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

import "./article-slider.css";

import image from "../../../assets/social-tag.jpeg";

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
  const exampleArticle = {
    thumbnail: image,
    title:
      "Opening Day of the Boating Season so let's set sail to the big blue sea",
    content:
      "So, you finally went to your first boxing class and learned the basics of the sport. You also learned that it’s recommended to wrap your hands before putting on the gloves. But there are times when you just don’t feel like wrapping them and you wonder why you even need them. Well, this blog is going to explain the benefits of wrapping your hands.",
    author: {
      name: "James adnaklndnadkjn",
      avatar: "https://picsum.photos/200/300",
    },
    time: "2 hours ago",
  };

  const articleList = [
    exampleArticle,
    exampleArticle,
    exampleArticle,
    exampleArticle,
    exampleArticle,
  ];

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/api/v1/article/top/getTop5Views")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div className="article-slider-wrapper">
      <div className="article-slider" ref={sliderRef}>
        {articleList.map((article, idx) => (
          <div
            key={idx}
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
