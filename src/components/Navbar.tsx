import { Menu, X } from "heroicons-react";
import React, { useState } from "react";
const Navbar = () => {
  const [nav, setNav] = useState<boolean>(false);
  const showNav = () => {
    setNav(!nav);
  };
  return (
    <div className="flex justify-around items-center w-full py-6">
      <h1 className="font-bold text-yellow-500 text-3xl">Kally Media Group</h1>
      <ul className="items-center justify-around hidden md:flex">
        <a href="#">
          <li>Home</li>
        </a>
        <a href="#about">
          <li>About</li>
        </a>
        <a href="#">
          <li>Service</li>
        </a>
        <a href="#">
          <li>Portfolio</li>
        </a>
        <a href="#blog">
          <li>Blog</li>
        </a>
        <a href="#contract">
          <li>Contract</li>
        </a>
      </ul>
      <div
        className="md:hidden"
        onClick={showNav}
      >
        {!nav ? (
          <Menu className="text-white cursor-pointer" />
        ) : (
          <X className="text-white cursor-pointer" />
        )}
      </div>
      <ul
        className={
          !nav
            ? "hidden"
            : " md:hidden absolute w-full mt-72 bg-[#2e2e37] bg-opacity-70"
        }
      >
        <li className="p-2 border-b-[1px] w-full">Home</li>
        <li className="p-2 border-b-[1px] w-full">About</li>
        <li className="p-2 border-b-[1px] w-full">Service</li>
        <li className="p-2 border-b-[1px] w-full">Portfolio</li>
        <li className="p-2 border-b-[1px] w-full">Blog</li>
        <li className="p-2 border-b-[1px] w-full">Contract</li>
      </ul>
    </div>
  );
};

export default Navbar;
