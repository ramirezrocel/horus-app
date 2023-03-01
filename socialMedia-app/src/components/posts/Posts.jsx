import Post from "../post/Post";
import "./posts.scss";

const Posts = ({ posts, currentUser }) => {
  return (
    <div className="posts">
      {posts.map((post) => (
        <Post post={post} key={post.id} currentUser={currentUser} />
      ))}
    </div>
  );
};

export default Posts;
