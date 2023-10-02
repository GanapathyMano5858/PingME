import React from "react";
import "./Navbar.css";
import Logo from "../../img/PingME_Logo.svg";
const Navbar = () => {
  return (
    <div className="navBarSection">
      <div className="header flex">
        <div className="logoDiv">
          <a href="#" className="logo flex">
            <img src={Logo} alt="Logo" style={{ width: "250px" }} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
