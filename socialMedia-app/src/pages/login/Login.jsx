import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Joi from "joi";
import * as authService from "../../services/auth";
import "./login.scss";
// import { AuthContextProvider } from "../../context/authContext";

const Login = ({ onLogin }) => {
  const navigate = useNavigate();

  /* get logged user data from local storage */
  const [accessToken, setAccessToken] = useState(authService.getAccessToken());

  /* set form content or input value */
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  /*form validation */
  const schema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
  });

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

  /* submit login form*/
  const handleSubmit = async (event) => {
    event.preventDefault();
    onLogin(form.username, form.password);
  };

  // const handleSubmit = async (event, username, password) => {
  //   event.preventDefault();
  //   try {
  //     const response = await authService.login(username, password);
  //     localStorage.setItem("accessToken", response.data.accessToken);
  //     setAccessToken(response.data.accessToken);
  //     console.log(accessToken);
  //     alert("login successfully");
  //     // navigate("/");
  //   } catch (error) {
  //     if (error.response && error.response.status === 400) {
  //       alert(error.response.data.message);
  //     }
  //   }
  // };

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello World.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
            alias totam numquam ipsa exercitationem dignissimos, error nam,
            consequatur.
          </p>
          <span>Don't you have an account?</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                name="username"
                onChange={handleChange}
                value={form.username}
                type="text"
                placeholder="Username"
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
              />
              <p className="text-error">{errors.password}</p>
            </div>
            <button type="submit" disabled={isFormInvalid()}>
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
