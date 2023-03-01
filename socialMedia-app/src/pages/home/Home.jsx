import Stories from "../../components/stories/Stories";
import Posts from "../../components/posts/Posts";
import Share from "../../components/share/Share";
import * as userService from "../../services/user";
import "./home.scss";
import { useEffect, useState } from "react";

const Home = ({ onSubmit, posts, currentUser }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    userService.fetchUsers().then((response) => {
      setUsers(response.data);
    });
  }, []);

  return (
    <div className="home">
      <Stories />
      <Share onSubmit={onSubmit} currentUser={currentUser}></Share>
      <Posts posts={posts} users={users} currentUser={currentUser} />
    </div>
  );
};

export default Home;
