import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Joi from "joi";
import * as authService from "../../services/auth";
import "./login.scss";
// import { AuthContextProvider } from "../../context/authContext";
import { ToastContainer, toast, Zoom, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = ({ onLogin }) => {
  const navigate = useNavigate();

  /* get logged user data from local storage */
  const [accessToken, setAccessToken] = useState(authService.getAccessToken());

  /* set form content or input value */
  const [form, setForm] = useState({
    usernameOrEmail: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  /*form validation */
  const schema = Joi.object({
    usernameOrEmail: Joi.string().required(),
    password: Joi.string().required(),
  });

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
    onLogin(form.usernameOrEmail, form.password);
  };

  return (
    <div className="login">
    <ToastContainer />
      <div className="card">
        <div className="left">
          <h1>HORUS</h1>
          <h2>Best Playing Game Today.</h2>
          <p>
            Games always believe that an epic win is possible and that it’s
            always worth trying and trying now.
          </p>
          <span>Don't you have an account?</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <h5>Keep calm and game on.</h5>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                name="usernameOrEmail"
                onChange={handleChange}
                value={form.usernameOrEmail}
                type="text"
                placeholder="Username or Email"
              />
              <p className="text-error">{errors.usernameOrEmail}</p>
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
