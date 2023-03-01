import { useContext } from "react";
import "./stories.scss";
import { AuthContext } from "../../context/authContext";
import * as authService from "../../services/auth";

const Stories = () => {
  return (
    <a href="https://epulze.com/?utm_source=google&utm_medium=cpc&utm_campaign=15176570628&utm_content=133307518950&utm_term=gaming%20tournaments&gclid=Cj0KCQiAutyfBhCMARIsAMgcRJRWTsUCXhvVb8cAMQ07Nkf9j0oaMdGjqEcWeHdoUQ81afL3YW3ARJgaApZYEALw_wcB">
      <video
        controls
        poster="./pictures/a.JPG"
        src="./pictures/video.mp4"
        className="tournament"
      ></video>
    </a>
  );
};

export default Stories;
