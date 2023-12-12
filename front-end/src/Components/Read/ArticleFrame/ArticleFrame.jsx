import "./article-frame.css";

const ArticleFrame = ({ previewArticle, publishArticle }) => {
  const formatTime = (time) => {
    const months = [
      "JAN",
      "FEB",
      "MAR",
      "APR",
      "MAY",
      "JUN",
      "JUL",
      "AUG",
      "SEP",
      "OCT",
      "NOV",
      "DEC",
    ];

    const date = new Date(time);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const month = months[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();

    return `${formattedHours}:${formattedMinutes}${ampm}, ${month} ${day}, ${year}`;
  };

  return (
    <>
      <div className="article-frame">
        {previewArticle ? (
          <>
            <div className="article-frame-title">{previewArticle.title}</div>
            <div className="article-frame-info">
              <div className="article-frame-views">VIEWS: 0</div>
              <div className="article-frame-time">
                POSTED: {previewArticle.time}
              </div>
            </div>
            <div
              className="article-frame-img"
              style={{ backgroundImage: `url(${previewArticle.thumbnail})` }}
            ></div>
            <div className="article-frame-para">
              {previewArticle.content.map((para, index) => (
                <div key={index}>{para}</div>
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="article-frame-title">{publishArticle.title}</div>
            <div className="article-frame-info">
              <div className="article-frame-views">
                VIEWS: {publishArticle.views}
              </div>
              <div className="article-frame-time">
                POSTED: {formatTime(publishArticle.time)}
              </div>
            </div>
            <div
              className="article-frame-img"
              style={{ backgroundImage: `url(${publishArticle.thumbnail})` }}
            ></div>
            <div className="article-frame-para">
              {Array.isArray(publishArticle.content) ? (
                publishArticle.content.map((para, index) => (
                  <div key={index}>{para}</div>
                ))
              ) : (
                <div>{publishArticle.content}</div>
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ArticleFrame;
