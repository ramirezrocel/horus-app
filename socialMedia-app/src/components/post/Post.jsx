//fetch-user/me.posts
import "./post.scss";
import "../comments/comments.scss";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import * as userService from "../../services/user";
import * as commentService from "../../services/comment";
import * as authService from "../../services/auth";
import Joi from "joi";

const Post = ({ post }) => {
  const currentUser = authService.getCurrentUser();
  const navigate = useNavigate();
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

  const getNumberOfComments = () => {
    if (comments.length > 1) {
      return `${comments.length} Comments`;
    } else if (comments.length == 1) {
      return `${comments.length} Comment`;
    } else {
      return "Comment";
    }
  };

  const getImage = (id) => {
    const data = users.find((user) => user.id === id);
    return data["imageUrl"];
  };

  const getUsername = (id) => {
    const data = users.find((user) => user.id === id);
    return data["username"];
  };

  const [form, setForm] = useState({
    value: "",
    postId: post.id,
  });

  const [errors, setErrors] = useState({});

  /*form validation */
  const schema = Joi.object({
    value: Joi.string().required(),
    postId: Joi.string().required(),
  });

  const handleCommentSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await commentService.addComment(form.postId, form.value);
      // alert("Comment successful");
      commentService.fetchCommentsByPost(post.id).then((response) => {
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

  /**
   * handle every event
   * set form input values
   * set errors to form
   */
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

  /* button disabled = true or false */
  const isFormInvalid = () => {
    const result = schema.validate(form);
    return !!result.error;
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
            {getNumberOfComments()}
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

export default Post;
