import "../../components/share/share.scss";
import Image from "../../assets/add-image.png";
import * as postService from "../../services/post";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Joi from "joi";
import "../home/home.scss";

const PostForm = ({ initialValue, currentUser }) => {
  const navigate = useNavigate();
  const params = useParams();

  /* set form content or input value */
  const [form, setForm] = useState(
    initialValue || {
      value: "",
      id: params.id,
      postImageURL: "",
    }
  );

  useEffect(() => {
    postService.fetchPostById(params.id).then((response) => {
      setForm(response.data);
    });
  }, []);

  const [errors, setErrors] = useState({});

  /*form validation */
  const schema = Joi.object({
    value: Joi.string().required(),
    postImageURL: Joi.string().allow("").optional(),
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await postService.updatePost(
        form.value,
        form.postImageURL,
        form.id
      );
      alert("Post Updated Successfully");
      navigate(`/posts/${form.id}`);
    } catch (error) {
      if (error.response && error.response.status === 400) {
        alert(error.response.data.message);
      }
    }
  };

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
    <div className="home">
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
                <div className="item">
                  <img src={Image} alt="" />
                </div>
                <input
                  name="postImageURL"
                  error={!!errors.postImageURL}
                  helperText={errors.postImageURL}
                  onChange={handleChange}
                  value={form.postImageURL}
                  label="Post"
                  placeholder={`   Insert ImageUrl`}
                />
              </div>
              <div className="right">
                <button type="submit">Share</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PostForm;
