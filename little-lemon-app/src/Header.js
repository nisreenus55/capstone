import React from "react";
import ProfilePicture from "./Assets/logo.svg";

const Header = () => {
  return (
    <header className="head-image">
      <img src={ProfilePicture} alt="Little Lemon Header" />
    </header>
  );
};

export default Header;
