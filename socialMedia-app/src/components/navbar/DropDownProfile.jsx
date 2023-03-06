import React from "react";
import "./Drop.scss";
import { Button } from "@mui/material";

const DropDownProfile = ({ onLogout }) => {
  return (
    <div className="flex flex-col dropDownProfile">
      <ul className="flex flex-col gap-4">
        <Button
          href="profile/me"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          Profile
        </Button>{" "}
        <hr />{" "}
        <Button style={{ textDecoration: "none", color: "inherit" }}>
          Settings
        </Button>
        <hr />
        <Button
          href="/login"
          onClick={onLogout}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          Logout
        </Button>
      </ul>
    </div>
  );
};

export default DropDownProfile;
