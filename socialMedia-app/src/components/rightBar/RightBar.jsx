import "./rightBar.scss";

const RightBar = () => {
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Pending Invites</span>
          <div className="user">
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
          </div>
        </div>
        <div className="item">
          <span>Recently Played With</span>
          <div className="user">
            <div className="userInfo">
              <img src="./pictures/dora.jpg" alt="" />
              <p>
                <span>TheDestroyer</span>
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="./pictures/star.jpg" alt="" />
              <p>
                <span>StarFighter</span>
              </p>
            </div>
            <span>2 hrs ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="./pictures/lorax.jpg" alt="" />
              <p>
                <span>TheLorax</span>
              </p>
            </div>
            <span>3 hrs ago</span>
          </div>
        </div>
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
