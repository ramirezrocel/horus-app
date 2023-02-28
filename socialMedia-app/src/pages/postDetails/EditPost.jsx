import "../../components/post/Post";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { Link } from "react-router-dom";
import Comments from "../../components/comments/Comments";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as userService from "../../services/user";
import * as postService from "../../services/post";
import EditIcon from "@mui/icons-material/Edit";
import * as authService from "../../services/auth";

const EditPost = ({ post }) => {
  const [commentOpen, setCommentOpen] = useState(true);
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const currentUser = authService.getCurrentUser();

  //TEMPORARY
  const liked = false;

  const isUser = () => {
    if (post.userId === currentUser.sub) {
      return (
        <>
          <Link
            to={`/editPost/${post.id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <EditIcon />
          </Link>
          <button onClick={() => handleDeletePost(post.id)}>
            <DeleteOutlinedIcon color="action" />
          </button>
        </>
      );
    }
  };

  const handleDeletePost = async (id) => {
    try {
      await postService.deletePost(id);
      navigate("/");
    } catch (error) {
      if (error.response && error.response.status === 404) {
        alert("Data might have already been deleted");
      }
    }
  };

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
          <div>{isUser()}</div>
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

export default EditPost;
