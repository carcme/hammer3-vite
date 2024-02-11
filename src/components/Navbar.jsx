import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Spin as Hamburger } from "hamburger-react";
import { FaRegCalendarAlt, FaEnvelope } from "react-icons/fa";
import Logo from "../assets/hammer3_logo.svg";
import data from "../data/NavlinkData";
import useScrollPosition from "../hooks/useScrollPosition";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  const scrollPosition = useScrollPosition();

  return (
    <div
      className={`flex fixed justify-between items-center h-16 xl:px-40 mx-auto px-2 text-white 
       top-0 z-10 w-full transition-colors ease-in-out duration-700
      ${
        scrollPosition < 100 && !isOpen ? "bg-transparent" : "bg-[#151515]/95"
      } `}
    >
      {/* Logo */}
      <Link to="/" className="sm:pl-12 pl-4">
        <img
          src={Logo}
          alt="hammer3-logo"
          className="h-14 w-14 rounded-full hover:text-red-900 "
        />
      </Link>{" "}
      {/* Desktop Navigation */}
      <ul className="hover-diagonal-line hidden md:flex text-neutral-500">
        {data.map((item, index) => (
          <li key={index} className=" p-4 m-2 cursor-pointer duration-300">
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                isActive ? "relative text-white" : "relative"
              }
            >
              {item.text}
            </NavLink>{" "}
          </li>
        ))}
      </ul>
      <div
        id="big-nav-buttons"
        className="flex flex-grow justify-end mb-4 text-white px-4"
      >
        <div className="items-end space-x-4 mt-4">
          <Link to="/mystery">
            <button
              className="bg-transparent hover:bg-[#404040] border-[#404040] border-2 p-3 rounded-full transition duration-300 hover:cursor-pointer"
              aria-label="Show mysteries"
            >
              <FaRegCalendarAlt size={16} color="#ddd" />
            </button>
          </Link>
          <Link to="/contact">
            <button
              className="bg-[#404040] hover:bg-transparent/20 border-[#404040] border-2 p-3 rounded-full transition duration-300 hover:cursor-pointer"
              aria-label="Contact"
            >
              <FaEnvelope size={16} color="#ddd" />
            </button>
          </Link>
        </div>
      </div>
      {/* Mobile Navigation Icon */}
      <div className="block md:hidden transition ease-in-out duration-700 pr-4">
        <Hamburger toggled={isOpen} toggle={setOpen} color="#aaa" />
      </div>
      {/* Mobile Navigation Menu */}
      <ul
        className={`top-[64px] md:hidden left-0 w-[60%] p-10 bg-[#151515]/95 text-neutral-500 fixed
           h-full z-40 ease-in-out duration-700 
        ${
          isOpen
            ? "translate-x-0 bg-[#151515]/95"
            : "-translate-x-full bg-transparent"
        }`}
      >
        {/* Mobile Navigation Items */}
        {data.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className={({ isActive }) => (isActive ? " text-white " : "")}
          >
            <li className="p-4 border-b rounded-xl hover:border-red-700 hover:font-bold hover:text-white duration-300  cursor-pointer border-neutral-500 z-10">
              {item.text}
            </li>
          </NavLink>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
