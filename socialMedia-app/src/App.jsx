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
import * as userService from "../src/services/user";
import NotFound from "./pages/notFound/NotFound";
import * as postService from "../src/services/post";
import PostDetailsPage from "./pages/postDetails/PostDetailsPage";
import PostForm from "./pages/postDetails/PostForm";

function App() {
  const navigate = useNavigate();

  const { darkMode } = useContext(DarkModeContext);

  /* get logged user data from local storage */
  const [accessToken, setAccessToken] = useState(authService.getAccessToken());
  const [posts, setPosts] = useState([]);
  const [currentUser, setCurrentUser] = useState([]);

  useEffect(() => {
    if (accessToken) {
      postService.fetchPosts().then((response) => {
        setPosts(response.data);
      });
      userService.me().then((response) => {
        setCurrentUser(response.data);
      });
    }
  }, []);

  const handleLogin = async (username, password) => {
    try {
      const response = await authService.login(username, password);
      localStorage.setItem("accessToken", response.data.accessToken);
      setAccessToken(response.data.accessToken);
      alert("Login successfully");

      postService.fetchPosts().then((response) => {
        setPosts(response.data);
      });

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
        postService.fetchPosts().then((response) => {
          setPosts(response.data);
          alert("Shared Post!");
        });
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
        <Navbar onLogout={handleLogout} currentUser={currentUser} />
        <div style={{ display: "flex" }}>
          <LeftBar currentUser={currentUser} />
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
            element={
              <Home
                posts={posts}
                onSubmit={handleSubmit}
                currentUser={currentUser}
              />
            }
          />

          <Route
            path="/profile/:id/posts"
            element={<Profile currentUser={currentUser} />}
          />
          <Route
            path="users/me"
            element={
              <Profile onSubmit={handleSubmit} currentUser={currentUser} />
            }
          />
          <Route
            path="/posts/:id"
            element={<PostDetailsPage currentUser={currentUser} />}
          />
          <Route
            path="/editPost/:id"
            element={<PostForm currentUser={currentUser} />}
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
