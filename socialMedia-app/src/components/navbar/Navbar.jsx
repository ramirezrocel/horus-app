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
import { Link, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import DropDownProfile from "./DropDownProfile";
import * as profileService from "../../services/profile";
import SearchBar from "./SearchBar";

const Navbar = ({ onLogout, currentUser }) => {
  const { toggle, darkMode } = useContext(DarkModeContext);
  const [openProfile, setOpenProfile] = useState(false);
//   const [query, setQuery] = useState([]);
//   const [search, setSearch] = useState({ username: "" });
  const params = useParams();

//   useEffect(() => {
//     profileService.fetchUsers().then((response) => {
//       setQuery(response.data);
//     });
//   }, []);

  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <img className="horuslogo" src="../../pictures/horuslogo.png"></img>
          <img className="namelogo" src="../../pictures/namelogo.png"></img>
          {/* <span>HORUS</span> */}
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
