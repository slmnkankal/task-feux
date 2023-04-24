import React from "react";
import DropdownMenu from "../dropdown";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5">
        <div className="container-fluid">
          <a className="navbar-brand navbar-center" href="#!">
            <HomeOutlinedIcon sx={{ fontSize: 45 }} color="primary" className="navbar-icon"/>
            FEUX
          </a>
          <DropdownMenu />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
