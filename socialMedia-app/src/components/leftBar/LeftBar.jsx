import "./leftBar.scss";
import Friends from "../../assets/invite.png";
import Groups from "../../assets/customers.png";
import Events from "../../assets/calendar.png";
import Home from "../../assets/home.png";
import Messages from "../../assets/chat.png";
import Tournaments from "../../assets/tournament.png";
import * as authService from "../../services/auth";
import { Link } from "react-router-dom";

const LeftBar = () => {
  const currentUser = authService.getCurrentUser();

  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img src={currentUser.imageUrl} alt="" />
            <Link
              to={`users/me`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <span>{currentUser.name}</span>
            </Link>
          </div>
          <div className="item">
            <img src={Home} alt="" />
            <Link
              to="./home"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <span>Home</span>
            </Link>
          </div>

          <div className="item">
            <img src={Friends} alt="" />
            <span>Friends</span>
          </div>
          <div className="item">
            <img src={Groups} alt="" />
            <span>Teams</span>
          </div>

          <div className="item">
            <img src={Messages} alt="" />
            <span>Chat Rooms</span>
          </div>
          <div className="item">
            <img src={Tournaments} alt="" />
            <span>Tournaments</span>
          </div>
          <div className="item">
            <img src={Events} alt="" />
            <span>Events</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>MY GAMES</span>
          <div>
            <img className="games" src="../../pictures/left.jpg"></img>
            <img className="games" src="../../pictures/counter.png"></img>
            <img
              className="games"
              src="https://i.pinimg.com/originals/c9/13/7e/c9137e7a2879f90e22df9fc5cd3bf85f.jpg"
            ></img>
            <img
              className="games"
              src="https://s.yimg.com/ny/api/res/1.2/okOvanpaQmlOXa.CM3Wpdg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2020-10/259f0650-094e-11eb-8bfb-60e78dcd1af0"
            ></img>
            <img
              className="games"
              src="https://play-lh.googleusercontent.com/86nnEwX5TLcDv3F-zhlAm4Ja0A4cbOV7lKh1yWc9Gmy0pK_DECD87yPBhrR6DTcOMWyE"
            ></img>
            <img
              className="games"
              src="https://play-lh.googleusercontent.com/bPz1guJ6FHF3oIOEy3KqwpaDDKO-hLRaZoyzmM8bLFLN8fWm6L0_EuUnkwv9iqPo3Ag"
            ></img>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default LeftBar;
