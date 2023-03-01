import "./rightBar.scss";

const RightBar = () => {
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Recommended Games</span>
          <a href="https://valorantesports.com/schedule">
            <img
              className="games"
              src="https://media.tenor.com/lTn_Gj0ljzYAAAAd/jett-valorant.gif"
            ></img>
          </a>
          <a href="https://www.dota2.com/home">
            <img
              className="games"
              src="https://thumbs.gfycat.com/CoordinatedGiganticApatosaur-max-1mb.gif"
            ></img>
          </a>
        </div>

        <a href="https://www.youtube.com/results?search_query=gaming+website+reacthttps://www.youtube.com/gaming">
          <img
            className="livestream"
            src="https://miro.medium.com/max/960/1*1DYqiJbuRBLxl8VsKu68Kw.gif"
          ></img>
        </a>

        <div className="item">
          <span>Online Friends</span>
          <div className="user">
            <div className="userInfo">
              <img src="../../pictures/juan.jpg" alt="" />
              <div className="online" />
              <span>JuanWick</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="../../pictures/mad.png" alt="" />
              <div className="online" />
              <span>YouMadBro</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="../../pictures/red.png" alt="" />
              <div className="online" />
              <span>RedDawn</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="../../pictures/brite.jpg" alt="" />
              <div className="online" />
              <span>RainbowBrite</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="../../pictures/legend.jpg" alt="" />
              <div className="online" />
              <span>LegendOfDoom</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="../../pictures/ultimate.jpg" alt="" />
              <div className="online" />
              <span>UltimateWarQueen</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
