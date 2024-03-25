import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Spin as Hamburger } from "hamburger-react";
import { FaRegCalendarAlt, FaEnvelope } from "react-icons/fa";
import Logo from "../assets/hammer3_logo.svg";
import NavlinkData from "@/data/NavlinkData";
import useScrollPosition from "@/hooks/useScrollPosition";
import { getLanguage, useLanguage, useLanguageChange } from "@/LanguageContext";

const Navbar = () => {
  const menuRef = useRef();

  const language = useLanguage();
  const data = getLanguage(NavlinkData);
  const changeLanguage = useLanguageChange();
  const [isOpen, setOpen] = useState(false);

  const scrollPosition = useScrollPosition();

  useEffect(() => {
    let handler = (e) => {
      if (isOpen && !menuRef.current.contains(e.target)) {
        setOpen(false);
        console.log("closing menu");
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <div
      className={`flex fixed justify-between items-center h-16 xl:px-40 mx-auto px-2 text-white 
       top-0 z-50 w-full transition-colors ease-in-out duration-700
      ${
        scrollPosition < 100 && !isOpen ? "bg-transparent" : "bg-[#151515]/95"
      } `}
    >
      {/* Logo */}
      <Link to="/" className="pl-4 sm:pl-12">
        <img
          src={Logo}
          alt="hammer3-logo"
          className="rounded-full h-14 w-14 hover:text-red-900 "
        />
      </Link>{" "}
      {/* Desktop Navigation */}
      <ul className="hidden hover-diagonal-line md:flex text-neutral-500">
        {data.map((item, index) => (
          <li key={index} className="p-4 m-2 duration-300 cursor-pointer ">
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                isActive ? "relative text-white" : "relative"
              }
            >
              {item.text}
            </NavLink>
          </li>
        ))}
      </ul>
      <div
        id="big-nav-buttons"
        className="flex justify-end flex-grow pr-4 space-x-4 text-white md:pr-12"
      >
        <button
          className="hidden transition duration-300 md:flex hover:cursor-pointer"
          aria-label="language"
          onClick={changeLanguage}
        >
          <span
            className={`py-[14px] fi fib ${
              language === "de" ? "fi-gb" : "fi-de"
            }`}
          ></span>
        </button>
        <div className="items-end space-x-4">
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
      <div
        ref={menuRef}
        className="block transition duration-700 ease-in-out md:hidden"
      >
        <Hamburger toggled={isOpen} toggle={setOpen} color="#aaa" size={20} />
      </div>
      {/* Mobile Navigation Menu */}
      <ul
        className={`top-[64px] md:hidden left-0 w-[60%] p-10 bg-[#151515]/95 text-neutral-500 fixed
           h-full z-50 ease-in-out duration-700 
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
            <li className="z-50 p-4 duration-300 border-b cursor-pointer hover:border-red-700 hover:font-extrabold hover:text-white border-neutral-500">
              {item.text}
            </li>
          </NavLink>
        ))}
        <button
          className="z-50 p-4 duration-300 cursor-pointer "
          aria-label="language"
          onClick={changeLanguage}
        >
          {language === "de" && <span className="fi fi-gb fib"></span>}
          {language === "en" && <span className="fi fi-de fib"></span>}
        </button>
      </ul>
    </div>
  );
};

export default Navbar;
