import Post from "../post/Post";
import "./posts.scss";

const Posts = () => {
  const posts = [
    {
      id: 1,
      name: "Ashley",
      userId: 1,
      profilePic: "./pictures/legend.jpg",
      desc: "Who wants to join? Just message me!",
      img: "./pictures/became.jpg",
    },
    {
      id: 2,
      name: "Red",
      userId: 2,
      profilePic: "./pictures/red.png",
      desc: "I'm the hero of a thousand stories. I'm a superhero, an assassin a soldier. I've slain dragons and traveled through portals. I am a spartan, a commander. A king. I've saved a thousand worlds and countless more lives. What am I? I'm a gamer.",
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
