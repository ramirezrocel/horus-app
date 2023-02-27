import "./share.scss";
import Image from "../../assets/add-image.png";
import Map from "../../assets/add-location.png";
import Friend from "../../assets/add-friend.png";
import * as authService from "../../services/auth";
import * as postService from "../../services/post";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import Joi from "joi";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Share = ({ onSubmit, initialValue }) => {
  const currentUser = authService.getCurrentUser();
  const navigate = useNavigate();

  /* set form content or input value */
  const [form, setForm] = useState({
    value: "",
    postImageURL: "",
  });

  const [errors, setErrors] = useState({});

  /*form validation */
  const schema = Joi.object({
    value: Joi.string().required(),
    postImageURL: Joi.string().allow("").optional(),
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await postService.addPost(form.value, form.postImageURL);
      alert("Registration successful");
      navigate("/");
    } catch (error) {
      if (error.response && error.response.status === 400) {
        alert(error.response.data.message);
      }
    }
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

  /* button disabled = true or false */
  const isFormInvalid = () => {
    const result = schema.validate(form);
    return !!result.error;
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="share">
        <div className="container">
          <div className="top">
            <img src={currentUser.imageUrl} alt="" />
            <input
              name="value"
              error={!!errors.value}
              helperText={errors.value}
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
              <input
                name="postImageURL"
                error={!!errors.postImageURL}
                helperText={errors.postImageURL}
                onChange={handleChange}
                value={form.postImageURL}
                label="Post"
                placeholder={`Insert ImageUrl ${currentUser.name}?`}
              />
              {/* <input type="file" id="file" style={{ display: "none" }} /> */}
              {/* <label htmlFor="file"> */}
              <div className="item">
                <img src={Image} alt="" />
                <span>Add Image</span>
              </div>
              {/* </label> */}
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
