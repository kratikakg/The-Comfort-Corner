import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src="" alt="logo" className="w-[124px] h-[32px]" /> {/* add logo */}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        <li className="font-poppins font-normal cursor-pointer text-[24px]">
          <a href="#home">Home</a>
        </li>
        <li className="font-poppins font-normal cursor-pointer text-[24px]">
          <a href="#about">About</a>
        </li>
        <li className="font-poppins font-normal cursor-pointer text-[24px]">
          <a href="#shop">Shop</a>
        </li>{" "}
        {/* dropdown list */}
        <li className="font-poppins font-normal cursor-pointer text-[24px]">
          <a href="#contact">Contact Us</a>
        </li>
        <li>
          <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
        </li>
        {/*search bar icon*/}
        <li className="px-4">
          <FontAwesomeIcon icon={faCartShopping} size="lg" />
        </li>{" "}
        {/* cart icon */}
        <li className="px-4">
          <FontAwesomeIcon icon={faUser} size="lg" />
        </li>{" "}
        {/* profile icon */}
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={
            toggle ? (
              <FontAwesomeIcon icon={faXmark} size="lg" />
            ) : (
              <FontAwesomeIcon icon={faBars} size="lg" />
            )
          }
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl`}
        ></div>
      </div>
    </nav>
  );
};

export default Navbar;
