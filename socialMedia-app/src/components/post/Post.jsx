import "./post.scss";
import "../comments/comments.scss";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link } from "react-router-dom";
import Comments from "../comments/Comments";
import { useEffect, useState } from "react";
import * as userService from "../../services/user";

const Post = ({ post }) => {
  const [commentOpen, setCommentOpen] = useState(false);
  const [user, setUser] = useState({});
  //TEMPORARY
  const liked = false;

  useEffect(() => {
    userService.fetchUser(post.userId).then((response) => {
      setUser(response.data);
    });
  }, []);

  // console.log(username);

  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="userInfo">
            {/* For profile of the post owner */}
            <img src={user.imageUrl} alt="" />{" "}
            <div className="details">
              <Link
                to={`/profile/${post.userId}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {/* For username of the post owner */}
                <span className="name">{user.username}</span>
              </Link>
              <span className="date">1 min ago</span>
            </div>
          </div>
          <MoreHorizIcon />
        </div>
        <div className="content">
          <p>{post.value}</p>
          <img src={post.postImageURL} alt="" />
        </div>
        <div className="info">
          <div className="item">
            {liked ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />}
            12 Likes
          </div>
          <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
            <TextsmsOutlinedIcon />
            12 Comments
          </div>
          <div className="item">
            <ShareOutlinedIcon />
            Share
          </div>
        </div>
        {commentOpen && <Comments post={post} key={post.id} />}
      </div>
    </div>
  );
};

export default Post;
