import Stories from "../../components/stories/Stories";
import Posts from "../../components/posts/Posts";
import AddPost from "../../components/share/AddPost";
import Share from "../../components/share/Share";
import * as postService from "../../services/post";
import * as userService from "../../services/user";
import "./home.scss";
import { useEffect, useState } from "react";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   postService.fetchPosts().then((response) => {
  //     setPosts(response.data);
  //   });
  // }, []);
  useEffect(() => {
    async () => {
      userService.fetchUsers().then((response) => {
        setUsers(response.data);
      });
      try {
        const response = await posts.map((post) => {
          users.map((user) => {
            if (post.userId === user.id) {
              setPosts({ ...post, username: user.username });
            }
          });
        });
      } catch {
        response;
      }
    };
  }, []);

  console.log(posts);
  return (
    <div className="home">
      {/* this is home */}
      <Stories />
      {/* <AddPost /> */}
      <Share></Share>
      <Posts posts={posts} users={users} />
    </div>
  );
};

export default Home;
