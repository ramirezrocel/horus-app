import "./navbar.scss";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
// import { AuthContext } from "../../context/authContext";
import * as authService from "../../services/auth";

const Navbar = ({ onLogout }) => {
  const { toggle, darkMode } = useContext(DarkModeContext);
  // const { currentUser } = useContext(AuthContext);
  const currentUser = authService.getCurrentUser();
  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <img className="horuslogo" src="../pictures/horuslogo.png"></img>
          <img className="namelogo" src="../pictures/namelogo.png"></img>
          {/* <span>HORUS</span> */}
        </Link>

        <div className="search">
          <SearchOutlinedIcon />
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="right">
        {darkMode ? (
          <WbSunnyOutlinedIcon onClick={toggle} />
        ) : (
          <DarkModeOutlinedIcon onClick={toggle} />
        )}
        <Link to="/home" style={{ textDecoration: "none", color: "inherit" }}>
          <HomeOutlinedIcon />
        </Link>

        <Button
          href="/login"
          onClick={onLogout}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          Logout
        </Button>
        <div className="user">
          {/* <img src={currentUser.profilePic} alt="" /> */}
          {/* <span>{currentUser.name}</span> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
