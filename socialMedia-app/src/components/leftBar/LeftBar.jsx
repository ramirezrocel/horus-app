import "./leftBar.scss";
import Friends from "../../assets/invite.png";
import Groups from "../../assets/customers.png";
import Watch from "../../assets/live.png";
import Events from "../../assets/calendar.png";
import Gaming from "../../assets/gamepad.png";
import Gallery from "../../assets/photo.png";
import Find from "../../assets/search.png";
import Messages from "../../assets/chat.png";
import Block from "../../assets/block.png";
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";
import * as authService from "../../services/auth";

const LeftBar = () => {
  // const { currentUser } = useContext(AuthContext);
  const currentUser = authService.getCurrentUser();

  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img src={currentUser.imageUrl} alt="" />
            <span>{currentUser.name}</span>
          </div>
          <div className="item">
            <img src={Friends} alt="" />
            <span>Friends</span>
          </div>
          <div className="item">
            <img src={Groups} alt="" />
            <span>Your Groups</span>
          </div>
          <div className="item">
            <img src={Block} alt="" />
            <span>Blocked</span>
          </div>
          <div className="item">
            <img src={Messages} alt="" />
            <span>Messages</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Others</span>
          <div className="item">
            <img src={Watch} alt="" />
            <span>Live Streams</span>
          </div>
          <div className="item">
            <img src={Events} alt="" />
            <span>Events</span>
          </div>
          <div className="item">
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
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default LeftBar;
