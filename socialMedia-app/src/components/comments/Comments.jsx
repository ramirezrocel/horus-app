import "./comments.scss";
import * as authService from "../../services/auth";

const Comments = () => {
  const currentUser = authService.getCurrentUser();
  const comments = [
    {
      id: 1,
      desc: "Me bro!",
      name: "UltimateWarQueen",
      userId: 1,
      profilePicture: "./pictures/ultimate.jpg",
    },
    {
      id: 2,
      desc: "I don't need to get a life. I'm a gamer I have lots of lives.",
      name: "RedDawn",
      userId: 2,
      profilePicture: "./pictures/red.png",
    },
  ];
  return (
    <div className="comments">
      <div className="write">
        <img src={currentUser.imageUrl} alt="" />
        <input type="text" placeholder="write a comment" />
        <button>Send</button>
      </div>
      {comments.map((comment) => (
        <div className="comment">
          <img src={comment.profilePicture} alt="" />
          <div className="info">
            <span>{comment.name}</span>
            <p>{comment.desc}</p>
          </div>
          <span className="date">1 hour ago</span>
        </div>
      ))}
    </div>
  );
};

export default Comments;
