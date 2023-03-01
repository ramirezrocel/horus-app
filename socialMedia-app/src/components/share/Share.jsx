import "./share.scss";
import Image from "../../assets/add-image.png";
import Map from "../../assets/add-location.png";
import Friend from "../../assets/add-friend.png";
import Joi from "joi";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Share = ({ onSubmit, currentUser }) => {
  const navigate = useNavigate();

  /* set form content or input value */
  const [form, setForm] = useState({
    value: "",
    postImageURL: "",
    username: currentUser.username,
  });

  const [errors, setErrors] = useState({});

  /*form validation */
  const schema = Joi.object({
    value: Joi.string().required(),
    postImageURL: Joi.string().allow("").optional(),
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(form);
  };

  /**
   * handle every event
   * set form input values
   * set errors to form
   */
  const handleChange = ({ currentTarget: input }) => {
    setForm({
      ...form,
      [input.name]: input.value,
    });

    const { error } = schema
      .extract(input.name)
      .label(input.name)
      .validate(input.value);

    if (error) {
      setErrors({ ...errors, [input.name]: error.details[0].message });
    } else {
      delete errors[input.name];
      setErrors(errors);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="share">
        <div className="container">
          <div className="top">
            <img src={currentUser.imageUrl} alt="" />
            <input
              name="value"
              onChange={handleChange}
              value={form.value}
              type="text"
              label="Post"
              placeholder={`What's on your mind ${currentUser.name}?`}
            />
          </div>
          <hr />
          <div className="bottom">
            <div className="left">
              <div className="item">
                <img src={Image} alt="" />
              </div>
              <div>
                <input
                  name="postImageURL"
                  onChange={handleChange}
                  value={form.postImageURL}
                  label="Post"
                  placeholder={`Insert ImageUrl`}
                />
              </div>

              <div className="item">
                <img src={Map} alt="" />
                <span>Add Place</span>
              </div>
              <div className="item">
                <img src={Friend} alt="" />
                <span>Tag Friends</span>
              </div>
            </div>
            <div className="right">
              <button type="submit">Share</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Share;
