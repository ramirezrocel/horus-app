import Stories from "../../components/stories/Stories";
import Posts from "../../components/posts/Posts";
import Share from "../../components/share/Share";
import * as userService from "../../services/user";
import "./home.scss";
import { useEffect, useState } from "react";
import Loading from "../loading/Loading";

const Home = ({ onSubmit, posts, currentUser }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    userService.fetchUsers().then((response) => {
      setUsers(response.data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="home">
        <Loading />
      </div>
    );
  }

  return (
    <div className="home">
      <Stories />
      <Share onSubmit={onSubmit} currentUser={currentUser}></Share>
      <Posts posts={posts} users={users} currentUser={currentUser} />
    </div>
  );
};

export default Home;
