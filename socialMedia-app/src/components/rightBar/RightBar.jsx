import "./rightBar.scss";

const RightBar = () => {
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Recommended Games</span>
          <a href="https://valorantesports.com/schedule">
            <img className="games" src="./pictures/valorant.jpg"></img>
          </a>
          <a href="https://www.dota2.com/home">
            <img className="games" src="./pictures/dota.jpg"></img>
          </a>
          {/* <div className="user">
            <div className="userInfo">
              <img src="./pictures/firestarter.jpg" alt="" />
              <span>FireStarter</span>
            </div>
            <div className="buttons">
              <button>Accept</button>
              <button>Ignore</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="./pictures/gownend.jpg" alt="" />
              <span>GownEnd</span>
            </div>
            <div className="buttons">
              <button>Accept</button>
              <button>Ignore</button>
            </div>
          </div> */}
        </div>

        <a href="https://www.youtube.com/results?search_query=gaming+website+reacthttps://www.youtube.com/gaming">
          <img className="livestream" src="./pictures/livestream.jpg"></img>
        </a>

        <div className="item">
          <span>Online Friends</span>
          <div className="user">
            <div className="userInfo">
              <img src="./pictures/juan.jpg" alt="" />
              <div className="online" />
              <span>JuanWick</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="./pictures/mad.png" alt="" />
              <div className="online" />
              <span>YouMadBro</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="./pictures/red.png" alt="" />
              <div className="online" />
              <span>RedDawn</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="./pictures/brite.jpg" alt="" />
              <div className="online" />
              <span>RainbowBrite</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="./pictures/legend.jpg" alt="" />
              <div className="online" />
              <span>LegendOfDoom</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="./pictures/ultimate.jpg" alt="" />
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
