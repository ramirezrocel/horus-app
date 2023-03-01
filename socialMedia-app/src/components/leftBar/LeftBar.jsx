import "./leftBar.scss";
import Friends from "../../assets/invite.png";
import Groups from "../../assets/customers.png";
import Events from "../../assets/calendar.png";
import Gaming from "../../assets/gamepad.png";
import Gallery from "../../assets/photo.png";
import Find from "../../assets/search.png";
import Messages from "../../assets/chat.png";
import Tournaments from "../../assets/tournament.png";
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";
import * as authService from "../../services/auth";
import { Link } from "react-router-dom";

const LeftBar = () => {
  // const { currentUser } = useContext(AuthContext);
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

          <img className="games" src="../pictures/left.jpg"></img>
          <img className="games" src="../pictures/counter.png"></img>

          {/* <div className="item">
            <img src={Gaming} alt="" />
            <span>Gaming</span>
          </div>
          <div className="item">
            <img src={Gallery} alt="" />
            <span>Gallery</span>
          </div>
          <div className="item">
            <img src={Find} alt="" />
            <span>Find a Group</span>
          </div> */}
        </div>
        <hr />
      </div>
    </div>
  );
};

export default LeftBar;
