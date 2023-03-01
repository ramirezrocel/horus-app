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
import * as commentService from "../../services/comment";
import Joi from "joi";

const EditPost = ({ post }) => {
  const [commentOpen, setCommentOpen] = useState(true);
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const currentUser = authService.getCurrentUser();
  const [comments, setComments] = useState([]);
  const [users, setUsers] = useState([]);
  const [errors, setErrors] = useState({});

  const schema = Joi.object({
    value: Joi.string().required(),
    postId: Joi.string().required(),
  });

  const [form, setForm] = useState({
    value: "",
    postId: post.id,
  });

  const getImage = (id) => {
    const data = users.find((user) => user.id === id);
    return data["imageUrl"];
  };

  const getUsername = (id) => {
    const data = users.find((user) => user.id === id);
    return data["username"];
  };

  useEffect(() => {
    userService.fetchUser(post.userId).then((response) => {
      setUser(response.data);
    });

    postService.fetchCommentsByPost(post.id).then((response) => {
      setComments(response.data);
    });

    userService.fetchUsers().then((response) => {
      setUsers(response.data);
    });
  }, []);
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

  const handleCommentSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await postService.addComment(form.postId, form.value);
      // alert("Comment successful");
      postService.fetchCommentsByPost(post.id).then((response) => {
        setComments(response.data);
      });
      setForm({
        ...form,
        value: "",
      });
    } catch (error) {
      if (error.response && error.response.status === 400) {
        alert(error.response.data.message);
      }
    }
  };

  const handleChange = ({ currentTarget: input }) => {
    setForm({
      ...form,
      [input.name]: input.value,
    });

    const { error } = schema
      .extract(input.name)
      .label(input.name)
      .validate(input.value);

    if (error) {
      setErrors({ ...errors, [input.name]: error.details[0].message });
    } else {
      delete errors[input.name];
      setErrors(errors);
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
        {/* COmment Start */}
        {commentOpen && (
          <>
            <div className="comments">
              <form onSubmit={handleCommentSubmit} className="write">
                {/* <form> */}
                <img src={currentUser.imageUrl} alt="" />
                <input
                  name="postId"
                  onChange={handleChange}
                  value={form.postId}
                  type="hidden"
                />
                <input
                  name="value"
                  onChange={handleChange}
                  value={form.value}
                  type="text"
                  placeholder="write a comment"
                  required
                />
                <button type="submit">Send</button>
                {/* </form> */}
              </form>
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

export default EditPost;
