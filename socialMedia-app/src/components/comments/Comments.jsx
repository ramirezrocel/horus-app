import "./comments.scss";
import * as authService from "../../services/auth";
import { useState } from "react";
//ajshdjkahkjdhaskhd
const Comments = ({ post, comments, key }) => {
  const currentUser = authService.getCurrentUser();

  const [comment, setComments] = useState([]);

  const getComments = () => {
    setComments(comments.filter((comment) => comment.postId === post.id));
  };
  console.log(comment);
  // const comments = [
  //   {
  //     id: 1,
  //     desc: "Me bro!",
  //     name: "TheLorax",
  //     userId: 1,
  //     profilePicture: "./pictures/lorax.jpg",
  //   },
  //   {
  //     id: 2,
  //     desc: "Tips on how to talk to someone while they're gaming: Don't.",
  //     name: "RainbowBrite",
  //     userId: 2,
  //     profilePicture: "./pictures/brite.jpg",
  //   },
  // ];
  return (
    <div className="comments">
      <div className="write">
        <img src={currentUser.imageUrl} alt="" />
        <input type="text" placeholder="write a comment" />
        <button>Send</button>
      </div>
      {comments.map((comment) => (
        <div className="comment">
          <img src={comment.imageUrl} alt="" />
          <div className="info">
            <span>{comment.id === key && comment.value}</span>
            <p>{comment.desc}</p>
          </div>
          <span className="date">1 hour ago</span>
        </div>
      ))}
    </div>
  );
};

export default Comments;
