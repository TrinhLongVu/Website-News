import "./article-frame.css";

import img from "../../../assets/tech-tag.jpeg";

const ArticleFrame = ({ previewArticle }) => {
  return (
    <>
      <div className="article-frame">
        <div className="article-frame-title">
          {previewArticle ? (
            <>{previewArticle.title}</>
          ) : (
            <>
              Netflix's One Piece Renewed for a Second Season. Get Ready to hit
              the seas
            </>
          )}
        </div>
        <div className="article-frame-info">
          <div className="article-frame-views">VIEWS: 0</div>
          <div className="article-frame-time">
            POSTED: {previewArticle.time}
          </div>
        </div>
        {previewArticle ? (
          <>
            <div
              className="article-frame-img"
              style={{ backgroundImage: `url(${img})` }}
            ></div>
            <div className="article-frame-para">
              {previewArticle.content.map((para, index) => (
                <div key={index}>{para}</div>
              ))}
            </div>
          </>
        ) : (
          <>
            <div
              className="article-frame-img"
              style={{ backgroundImage: `url(${img})` }}
            ></div>
            <div className="article-frame-para">
              <div>
                One Piece fans, rejoice! Netflix has officially renewed its
                live-action adaptation for a second season just two weeks after
                its Aug. 28 debut.
              </div>
              <div>
                "It seems people around the world have been enjoying the show,
                which makes the hard work from the production team truly worth
                it," Oda said in the announcement, in part. "...Two weeks after
                the launch, I just received some great news: Netflix has decided
                to renew the show!"
              </div>
              <div>
                In a press release about the renewal, Netflix said episode count
                and story details will be shared at a later date. The first
                season comprised eight episodes between 50 and 60 minutes each.
              </div>
              <div>
                Oda caveated that it'll "still take awhile to get the scripts
                ready," asking the audience to be patient. He also teased that
                moving forward, the Straw Hats "will need a great doctor," no
                doubt teasing the introduction of fan favorite character Tony
                Tony Chopper, the human/reindeer hybrid who also acts as the
                crew's medical assistance.
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ArticleFrame;
