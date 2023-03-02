import "./navbar.scss";
import "./Drop.scss";
import "../../style.scss";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import { Link, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import * as authService from "../../services/auth";
import DropDownProfile from "./DropDownProfile";
import * as profileService from "../../services/profile";
import SearchBar from "./SearchBar";
// import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = ({ onLogout }) => {
  const { toggle, darkMode } = useContext(DarkModeContext);
  const currentUser = authService.getCurrentUser();
  const [openProfile, setOpenProfile] = useState(false);

  // console.log(search);

  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <img className="horuslogo" src="../../pictures/horuslogo.png"></img>
          <img className="namelogo" src="../../pictures/namelogo.png"></img>
        </Link>
      </div>
      <SearchBar />
      <div className="right">
        {darkMode ? (
          <WbSunnyOutlinedIcon onClick={toggle} />
        ) : (
          <DarkModeOutlinedIcon onClick={toggle} />
        )}
        <Link to="/home" style={{ textDecoration: "none", color: "inherit" }}>
          <HomeOutlinedIcon />
        </Link>
        <div className="user">
          <img
            src={currentUser.imageUrl}
            alt=""
            className="text -2x1 font-semibold cursor-pointer"
            onClick={() => setOpenProfile((prev) => !prev)}
          ></img>
        </div>
        {openProfile && <DropDownProfile onLogout={onLogout} />}
      </div>
    </div>
  );
};

export default Navbar;
