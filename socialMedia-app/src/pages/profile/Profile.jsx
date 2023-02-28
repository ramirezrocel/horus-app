import "./profile.scss";
import "../../components/posts/posts.scss";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import { useParams } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Posts from "../../components/posts/Posts";
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
  const params = useParams();

  useEffect(() => {
    profileService.fetchUserPost(params.id).then((response) => {
      setPosts(response.data);
      // console.log(response.data);
    });
    profileService.fetchUserByUsername(params.id).then((response) => {
      setUser(response.data);
      console.log(response.data);
    });
  }, []);
  console.log(params.id);

  const isMe = () => {
    if (params.id === currentUser.username) {
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
          {/* <div className="left">
            <a href="http://facebook.com">
              <FacebookTwoToneIcon fontSize="large" />
            </a>
            <a href="http://instagram.com">
              <InstagramIcon fontSize="large" />
            </a>
            <a href="http://twitter.com">
              <TwitterIcon fontSize="large" />
            </a>
          </div> */}
          <div className="center">
            <span>{user.name}</span>

            <br />
            <a href="http://facebook.com">
              <FacebookTwoToneIcon fontSize="large" />
            </a>
            <br />
            <a href="http://instagram.com">
              <InstagramIcon fontSize="large" />
            </a>
            <br />
            <a href="http://twitter.com">
              <TwitterIcon fontSize="large" />
            </a>
            <div className="info">
              <div className="item">
                <PlaceIcon />
                <span>Philippines</span>
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
