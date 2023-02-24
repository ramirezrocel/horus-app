import { useEffect, useState } from "react";
import Post from "../post/Post";
import * as authService from "../../services/auth";
import * as postService from "../../services/post";
import * as userService from "../../services/user";
import "./posts.scss";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    postService.fetchPosts().then((response) => {
      setPosts(response.data);
    });
  }, []);

  return (
    <div className="posts">
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};

export default Posts;
