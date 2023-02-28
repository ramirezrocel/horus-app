import Post from "../../components/post/Post";
import "../home/home.scss";
import { useEffect, useState } from "react";
import * as postService from "../../services/post";
import { useParams, useNavigate } from "react-router-dom";
import EditPost from "./EditPost";

const PostDetailsPage = () => {
  const [posts, setPosts] = useState([]);
  const params = useParams();

  useEffect(() => {
    postService.fetchPostById(params.id).then((response) => {
      setPosts(response.data);
    });
  }, []);
  console.log(params);

  return (
    <div className="home">
      <EditPost post={posts} key={posts.id} />
    </div>
  );
};

export default PostDetailsPage;
