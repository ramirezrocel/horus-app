import { useEffect, useState } from "react";
import Post from "../post/Post";
import * as authService from "../../services/auth";
import * as postService from "../../services/post";
import * as userService from "../../services/user";
import "./posts.scss";

const Posts = ({ posts, users }) => {
  // useEffect(() => {
  const [userDetail, setUser] = useState([]);
  const getUsername = (id) => {
    userService.fetchUser(id).then((response) => {
      return response.data;
      // console.log(response.data[`username`]);
    });
  };
  // }, ["id"]);

  return (
    <div className="posts">
      {posts.map((post) => (
        <Post
          post={{ ...post, username: getUsername(post.userId) }}
          key={post.id}
        />
      ))}
    </div>
  );
};

export default Posts;
