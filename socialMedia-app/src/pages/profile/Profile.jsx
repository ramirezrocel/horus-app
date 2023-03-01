import "./profile.scss";
import "../../components/posts/posts.scss";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import { useParams } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import Posts from "../../components/posts/Posts";
import LanguageIcon from "@mui/icons-material/Language";
import Post from "../../components/post/Post";
import * as authService from "../../services/auth";
import * as postService from "../../services/post";
import * as profileService from "../../services/profile";
import { useState } from "react";
import { useEffect } from "react";
import Share from "../../components/share/Share";

const Profile = ({ onSubmit }) => {
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState([]);
  const currentUser = authService.getCurrentUser();
  const { id } = useParams();

  const paramUsername = () => {
    if (id) {
      return id;
    } else {
      return currentUser.username;
    }
  };

  useEffect(() => {
    profileService.fetchUserPost(paramUsername()).then((response) => {
      setPosts(response.data);
    });
    profileService.fetchUserByUsername(paramUsername()).then((response) => {
      setUser(response.data);
    });
  }, []);

  const isMe = () => {
    if (paramUsername() === currentUser.username) {
      return <Share onSubmit={onSubmit}></Share>;
    }
  };

  return (
    <div className="profile">
      <div className="images">
        <img
          src="https://s3.amazonaws.com/prod-media.gameinformer.com/styles/full/s3/2019/09/04/3e7722f3/grbhero.jpg"
          alt=""
          className="cover"
        />
        <img src={user.imageUrl} alt="" className="profilePic" />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="center">
            <span>{user.name}</span>

            <div className="info">
              <div className="item">
                <PlaceIcon />
                <span>Philippines</span>
              </div>
              <div className="item">
                <LanguageIcon />
                <span>www.horus.com</span>
              </div>
              <div className="item">
                <span>Life feels better If You Play Games…🎮💫😍</span>
              </div>
            </div>
          </div>
        </div>
        {isMe()}
        <div className="posts">
          {posts.map((post) => (
            <Post post={post} key={post.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
