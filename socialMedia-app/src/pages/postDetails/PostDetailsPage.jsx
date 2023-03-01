import Post from "../../components/post/Post";
import "../home/home.scss";
import { useEffect, useState } from "react";
import * as postService from "../../services/post";
import { useParams, useNavigate } from "react-router-dom";
import EditPost from "./EditPost";

const PostDetailsPage = ({ currentUser }) => {
  const [posts, setPosts] = useState([]);
  const params = useParams();

  useEffect(() => {
    postService.fetchPostById(params.id).then((response) => {
      setPosts(response.data);
    });
  }, []);

  return (
    <div className="home">
      <EditPost post={posts} key={posts.id} currentUser={currentUser} />
    </div>
  );
};

export default PostDetailsPage;
