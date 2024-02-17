import React from "react";
import Logo from "../assets/logo.jsx";
import Dropdown from "./Dropdown";

const Navbar = () => {
  return (
    // if dark, bg-black else bg-white
    <div className="flex justify-between px-6">
      <div className="title flex items-center">
        <Logo />
        {/* if dark, text-white else text-black */}
        <p className="inline font-mono text-xl">Caffeine Coder</p>
      </div>
      <div className="options flex items-center">
        <Dropdown />
      </div>
    </div>
  );
};

export default Navbar;
