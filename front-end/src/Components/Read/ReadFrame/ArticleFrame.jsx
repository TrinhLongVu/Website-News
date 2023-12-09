import "./article-frame.css";

import img from "../../../assets/tech-tag.jpeg";

const ArticleFrame = () => {
  return (
    <>
      <div className="article-frame">
        <div className="article-frame-title">
          Netflix's One Piece Renewed for a Second Season. Get Ready to hit the
          seas
        </div>
        <div className="article-frame-info">
          <div className="article-frame-views">VIEWS: 2.5k</div>
          <div className="article-frame-time">POSTED: 3:12PM, SEP 15, 2023</div>
        </div>
        <div
          className="article-frame-img"
          style={{ backgroundImage: `url(${img})` }}
        ></div>
        <div className="article-frame-para">
          <p>
            One Piece fans, rejoice! Netflix has officially renewed its
            live-action adaptation for a second season just two weeks after its
            Aug. 28 debut.
          </p>
          <p>
            "It seems people around the world have been enjoying the show, which
            makes the hard work from the production team truly worth it," Oda
            said in the announcement, in part. "...Two weeks after the launch, I
            just received some great news: Netflix has decided to renew the
            show!"
          </p>
          <p>
            In a press release about the renewal, Netflix said episode count and
            story details will be shared at a later date. The first season
            comprised eight episodes between 50 and 60 minutes each.
          </p>
          <p>
            Oda caveated that it'll "still take awhile to get the scripts
            ready," asking the audience to be patient. He also teased that
            moving forward, the Straw Hats "will need a great doctor," no doubt
            teasing the introduction of fan favorite character Tony Tony
            Chopper, the human/reindeer hybrid who also acts as the crew's
            medical assistance.
          </p>
        </div>
      </div>
    </>
  );
};

export default ArticleFrame;
