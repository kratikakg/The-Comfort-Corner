import React from "react";

// import Logo from "../assets/logo";
import { footer } from "../data";

const Footer = () => {
  return (
    <footer className="section bg-primary text-white">
      <div className="container mx-auto">
        <div>
          <a href="#">{/* <img src={logo} alt="" /> */}</a>
        </div>
        <p className="text-center">
          &copy; Comfort Corner 2023 - All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
