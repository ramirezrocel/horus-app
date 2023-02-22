import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import * as authService from "../../services/auth";
import Joi from "joi";
import "./register.scss";

const Register = () => {
  const navigate = useNavigate();

  /* set form content or input value */
  const [form, setForm] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  /*form validation */
  const schema = Joi.object({
    email: Joi.string().required(),
    name: Joi.string().required(),
    username: Joi.string().required(),
    password: Joi.string().required(),
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await authService.register(
        form.name,
        form.email,
        form.username,
        form.password
      );
      alert("Registration successful");
      navigate("/login");
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
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Lama Social.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
            alias totam numquam ipsa exercitationem dignissimos, error nam,
            consequatur.
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
            <div style={{ width: 100 + "%" }}>
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
            <div>
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
            <div>
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
            <div>
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
