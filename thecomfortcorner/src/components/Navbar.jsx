import React, { useState } from "react";

const Navbar = () => {
  return (
    <nav className="w-full flex py-6 justify-between items-center">
      <img src=".\assets\logo.png" alt="logo " className="w-[124px] h-[32px]" />
      <ul className="list-none sm:flex hidden justify-end items-center flex-1 ">
        <li>A</li>
        <li>B</li>
        <li>C</li>
      </ul>
    </nav>
  );
};

export default Navbar;
