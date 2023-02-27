import { useEffect, useState } from "react";
import Post from "../post/Post";
import * as authService from "../../services/auth";
import * as postService from "../../services/post";
import * as userService from "../../services/user";
import "./posts.scss";

const Posts = ({ posts, users }) => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    posts.map((post) => {
      console.log(post.userId);
    });
  });

  // const [posts, setPosts] = useState([]);
  // const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   postService.fetchPosts().then((response) => {
  //     setPosts(response.data);
  //   });
  //   userService.fetchUsers().then((response) => {
  //     setUsers(response.data);
  //   });
  // }, []);

  // console.log(posts);
  // const getUser = (id) => {
  // console.log(id);
  //   return users.find((user) => user.id === id);
  // };

  return (
    <div className="posts">
      {posts.map((post) => (
        <Post post={post} users={users} key={post.id} />
      ))}
    </div>
  );
};

export default Posts;
