import "./post.scss";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import * as userService from "../../services/user";
import * as commentService from "../../services/comment";
import * as authService from "../../services/auth";

const Post = ({ post }) => {
  const currentUser = authService.getCurrentUser();

  const [comments, setComments] = useState([]);
  const [commentOpen, setCommentOpen] = useState(false);
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  //TEMPORARY
  const liked = false;

  useEffect(() => {
    userService.fetchUser(post.userId).then((response) => {
      setUser(response.data);
    });

    commentService.fetchCommentsByPost(post.id).then((response) => {
      setComments(response.data);
    });

    userService.fetchUsers().then((response) => {
      setUsers(response.data);
    });
  }, []);

  const getImage = (id) => {
    const data = users.find((user) => user.id === id);
    return data["imageUrl"];
  };
  const getUsername = (id) => {
    const data = users.find((user) => user.id === id);
    return data["username"];
  };

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

        {/* COmment Start */}
        {commentOpen && (
          <>
            <div className="comments">
              <div className="write">
                <img src={currentUser.imageUrl} alt="" />
                <input type="text" placeholder="write a comment" />
                <button>Send</button>
              </div>
              {comments.map((comment) => (
                <div className="comment">
                  <img src={getImage(comment.userId)} alt="" />

                  <div className="info">
                    <span>{getUsername(comment.userId)}</span>
                    <p>{comment.value}</p>
                  </div>
                  <span className="date">1 hour ago</span>
                </div>
              ))}
            </div>
          </>
        )}

        {/* COmment End */}
      </div>
    </div>
  );
};

export default Post;
