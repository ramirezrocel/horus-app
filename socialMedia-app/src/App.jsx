import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
  useNavigate,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import LeftBar from "./components/leftBar/LeftBar";
import RightBar from "./components/rightBar/RightBar";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import "./style.scss";
import { useContext, useEffect, useState } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import * as authService from "../src/services/auth";
import NotFound from "./pages/notFound/NotFound";
import * as postService from "../src/services/post";

function App() {
  const navigate = useNavigate();

  const { darkMode } = useContext(DarkModeContext);

  /* get logged user data from local storage */
  const [accessToken, setAccessToken] = useState(authService.getAccessToken());
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    postService.fetchPosts().then((response) => {
      setPosts(response.data);
    });
  }, []);

  const handleLogin = async (username, password) => {
    try {
      const response = await authService.login(username, password);
      localStorage.setItem("accessToken", response.data.accessToken);
      setAccessToken(response.data.accessToken);
      alert("Login successfully");
      navigate("/");
    } catch (error) {
      if (error.response && error.response.status === 400) {
        alert(error.response.data.message);
      }
    }
  };

  const handleLogout = () => {
    authService.logout();
    setAccessToken(null);
    navigate("/login");
  };

  const handleSubmit = (post) => {
    try {
      postService.addPost(post).then((response) => {
        // console.log(response);
        // alert("Post shared!");
      });
      postService.fetchPosts().then((response) => {
        setPosts(response.data);
      });
    } catch (error) {
      if (error.response && error.response.status === 400) {
        alert(error.response.data.message);
      }
    }
  };

  const Layout = () => {
    return (
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <Navbar onLogout={handleLogout} />
        <div style={{ display: "flex" }}>
          <LeftBar />
          <div style={{ flex: 6 }}>{<Outlet />}</div>
          <RightBar />
        </div>
      </div>
    );
  };

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={accessToken ? <Layout /> : <Navigate to="/login" />}
        >
          <Route path="/" element={<Navigate to="/home" />} />
          <Route
            path="/home"
            element={<Home onSubmit={handleSubmit} posts={posts} />}
          />
          <Route path="/profile/:id" element={<Profile />} />
          <Route
            path="users/me"
            element={<Profile onSubmit={handleSubmit} />}
          />
        </Route>

        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/not-found" />} />
      </Routes>
    </>
  );
}

export default App;
