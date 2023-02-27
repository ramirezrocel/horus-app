import "./profile.scss";
import "../../components/posts/posts.scss";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import { useParams } from "react-router-dom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
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

const Profile = () => {
  const [posts, setPosts] = useState([]);
  const params = useParams();
  const currentUser = authService.getCurrentUser();

  useEffect(() => {
    profileService.fetchUserPost(currentUser.username).then((response) => {
      setPosts(response.data);
      // console.log(response.data);
    });
  }, []);
  // console.log(posts);
  // const filteredPosts = posts.filter((posts) => posts.userId === params.id);
  // console.log(filteredPosts);
  return (
    <div className="profile">
      <div className="images">
        <img
          src="https://s3.amazonaws.com/prod-media.gameinformer.com/styles/full/s3/2019/09/04/3e7722f3/grbhero.jpg"
          alt=""
          className="cover"
        />
        <img src={currentUser.imageUrl} alt="" className="profilePic" />
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
            <span>{currentUser.name}</span>

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
        <Share></Share>
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
