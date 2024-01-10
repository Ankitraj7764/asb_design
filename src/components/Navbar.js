import React, { useState } from "react";

import { Link } from "react-router-dom";

const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <nav id="navbar" className=" flex flex-col items-center md:px-6 px-3 md:py-3 py-2 rounded-sm">
      <div className="flex w-full justify-between items-center">

        <Link to="/">
          <div className="flex items-center">
            <img src={require("../image/Logo.png")} className="md:h-[44px] h-[34px] rounded-full" alt="BlackBull Academy Logo" />
            <div id="brandname" className=" font-sans md:text-[27px] font-semibold text-[22px] md:pt-[6px] pt-[7px] ml-[5px] md:ml-[10px]">
            Design classroom
            </div>
          </div>

        </Link>
        {/* Collapse button for small screens */}
        <button className="font-bold block md:hidden text-2xl" onClick={handleToggle}>
          {isCollapsed ? "×" : "☰"}
        </button>

        {/* Full menu for medium and large screens */}
        <div className="roboto hidden md:block font-semibold ">
          <ul className="flex  text-lg">
            <li className="mr-6">
              <Link to="/" className="rounded-xl shadow-lg border-2 hover:text-white hover:bg-black py-2 px-4 duration-150 ease-in-out">
                Home
              </Link>
            </li>
            <li className="mr-6">
              <Link to="/register" className="rounded-xl shadow-lg border-2 hover:bg-black hover:text-white py-2 px-4 duration-150 ease-in-out">
                Register
              </Link>
            </li>
            <li className="mr-6">
              <Link to="/login" className="rounded-xl shadow-lg border-2 hover:bg-black hover:text-white py-2 px-4 duration-150 ease-in-out">
                Login
              </Link>
            </li>

          </ul>
        </div>
      </div>

      {/* Collapsible menu for small screens */}
      <div
        id="menu"
        className={`roboto overflow-hidden flex md:hidden w-full mt-2 transition-all duration-500 ease-in-out ${isCollapsed ? "opacity-100 h-36" : "opacity-0 h-0"
          }`}
      >
        <ul className=" text-lg font-semibold">
          <li className="mb-2">
            <Link to="/" className="hover:text-gray-400 ">
              Home
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/register" className="hover:text-gray-400">
              Register
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/login" className="hover:text-gray-400">
              Login
            </Link>
          </li>


        </ul>
      </div>
    </nav>
  );
};

export default Navbar;