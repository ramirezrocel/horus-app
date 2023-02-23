import { useContext } from "react";
import "./stories.scss";
import { AuthContext } from "../../context/authContext";
import * as authService from "../../services/auth";

const Stories = () => {
  const stories = [
    {
      id: 1,
      img: "./pictures/a.JPG",
    },
  ];

  return (
    <div className="stories">
      {stories.map((story) => (
        <div className="story" key={story.id}>
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Stories;
