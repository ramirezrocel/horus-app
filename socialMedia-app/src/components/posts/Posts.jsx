import Post from "../post/Post";
import "./posts.scss";

const Posts = () => {
  const posts = [
    {
      id: 1,
      name: "YouMadBro",
      userId: 1,
      profilePic: "./pictures/mad.png",
      desc: "Who wants to join? Just message me!",
      img: "./pictures/became.jpg",
    },
    {
      id: 2,
      name: "JuanWick",
      userId: 2,
      profilePic: "./pictures/juan.jpg",
      desc: "The game has its ups and downs, but you can never lose focus of your individual goals and you can let yourself e beaten because of lack of effort.",
    },
  ];

  return (
    <div className="posts">
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};

export default Posts;
