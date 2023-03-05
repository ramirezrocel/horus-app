import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import * as authService from "../../services/auth";
import Joi, { ref } from "joi";
// const joi = require("joi");

import "./register.scss";

const Register = () => {
  const joi = require("joi");
  const { joiPasswordExtendCore } = require("joi-password");
  const joiPassword = joi.extend(joiPasswordExtendCore);
  const navigate = useNavigate();

  /* set form content or input value */
  const [form, setForm] = useState({
    name: "",
    email: "",
    username: "",
    imageUrl: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  /*form validation */
  const schema = Joi.object({
    imageUrl: Joi.string().allow("").optional(),
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .required(),
    name: Joi.string().max(50).required(),
    username: Joi.string().min(5).max(15).required(),
    password: joiPassword
      .string()
      .required()
      .minOfSpecialCharacters(1)
      .minOfLowercase(1)
      .minOfUppercase(1)
      .minOfNumeric(1)
      .noWhiteSpaces()
      .messages({
        "password.minOfUppercase":
          "{#label} should contain at least {#min} uppercase character",
        "password.minOfSpecialCharacters":
          "{#label} should contain at least {#min} special character",
        "password.minOfLowercase":
          "{#label} should contain at least {#min} lowercase character",
        "password.minOfNumeric":
          "{#label} should contain at least {#min} numeric character",
        "password.noWhiteSpaces": "{#label} should not contain white spaces",
      }),
    confirmPassword: Joi.string()
      .required()
      .valid(form.password)
      .messages({ "any.only": "Confirm Password must match password" }),
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await authService.register(
        form.name,
        form.email,
        form.username,
        form.password,
        form.imageUrl
      );
      alert("Registration successful");
      navigate("/login");
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

  const isFormInvalid = () => {
    const result = schema.validate(form);
    return !!result.error;
  };

  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>HORUS</h1>
          <h2>Best Playing Game Today.</h2>
          <p>
            Games always believe that an epic win is possible and that it’s
            always worth trying and trying now.
          </p>
          <span>Do you have an account?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <div className="register-header">
            <h1>Register</h1>
          </div>
          <form onSubmit={handleSubmit} action="" method="">
            <div className="mb-5" style={{ width: 100 + "%" }}>
              <input
                name="name"
                onChange={handleChange}
                value={form.name}
                type="text"
                placeholder="Name"
                required
              />
              <p className="text-error">{errors.name}</p>
            </div>
            <div className="mb-5">
              <input
                name="email"
                onChange={handleChange}
                value={form.email}
                type="email"
                placeholder="Email"
                required
              />
              <p className="text-error">{errors.email}</p>
            </div>
            <div className="mb-5">
              <input
                name="username"
                onChange={handleChange}
                value={form.username}
                type="text"
                placeholder="Username"
                required
              />
              <p className="text-error">{errors.username}</p>
            </div>
            <div className="mb-5">
              <input
                name="password"
                onChange={handleChange}
                value={form.password}
                type="password"
                placeholder="Password"
                required
              />
              <p className="text-error">{errors.password}</p>
            </div>
            <div className="mb-5">
              <input
                name="confirmPassword"
                onChange={handleChange}
                value={form.confirmPassword}
                type="password"
                placeholder="Confirm Password"
                required
              />
              <p className="text-error">{errors.confirmPassword}</p>
            </div>
            <div>
              <label>
                <small className="text-white">
                  Profile <i>(Optional)</i>
                </small>
              </label>
              <input
                name="imageUrl"
                onChange={handleChange}
                value={form.imageUrl}
                type="text"
                placeholder="Image Url"
              />
              <p className="text-error">{errors.imageUrl}</p>
            </div>

            <button disabled={isFormInvalid()} type="submit">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
