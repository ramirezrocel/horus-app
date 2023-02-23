import "./comments.scss";
import * as authService from "../../services/auth";
//ajshdjkahkjdhaskhd
const Comments = () => {
  const currentUser = authService.getCurrentUser();
  const comments = [
    {
      id: 1,
      desc: "Me bro!",
      name: "TheLorax",
      userId: 1,
      profilePicture: "./pictures/lorax.jpg",
    },
    {
      id: 2,
      desc: "Tips on how to talk to someone while they're gaming: Don't.",
      name: "RainbowBrite",
      userId: 2,
      profilePicture: "./pictures/brite.jpg",
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
