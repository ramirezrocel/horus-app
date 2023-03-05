import "../home/home.scss";
import { useEffect, useState } from "react";
import * as postService from "../../services/post";
import { useParams } from "react-router-dom";
import EditPost from "./EditPost";
import Loading from "../loading/Loading";

const PostDetailsPage = ({ currentUser }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const params = useParams();

  useEffect(() => {
    setLoading(true);
    postService.fetchPostById(params.id).then((response) => {
      setPosts(response.data);

      setLoading(false);
    });
  }, [params.id]);

  if (loading) {
    return (
      <div className="home">
        <Loading />
      </div>
    );
  }

  return (
    <div className="home">
      <EditPost post={posts} key={posts.id} currentUser={currentUser} />
    </div>
  );
};

export default PostDetailsPage;
