import React, { useState } from "react";
import { LuMenu } from "react-icons/lu";
import { RiArrowDropDownLine } from "react-icons/ri";

const Header = ({ logo, onclick, menuSelect }) => {
  return (
    <>
      <header className="p-5 md:px-16 relative z-50 inset-shadow">
        <nav className="flex items-center justify-between py-2">
          <div className="logo flex items-center space-x-2 ">
            <img src={logo} alt="" />
            <p className="text-3xl font-bold font-roboto">Certo</p>
          </div>

          <div className="flex items-center justify-end space-x-10 flex-1">
            <ul className="hidden lg:flex items-center font-bold space-x-10 font-poppins">
              <li>
                <a href="#">iPhone</a>
              </li>
              <li>
                <a href="#">Android</a>
              </li>
              <li>
                <a href="#">Help</a>
              </li>
              <li className="flex items-center">
                <a href="#">Company</a>
                <RiArrowDropDownLine className="text-3xl" />
              </li>
            </ul>
            <div>
              <button className="hidden md:block header_btn_color py-3 px-7 font-poppins font-semibold">
                Sign in
              </button>
            </div>
          </div>

          <div onClick={onclick}>
            <LuMenu className="text-4xl md:hidden" />
          </div>
        </nav>

        <ul
          className={`md:hidden cta text-white  absolute left-0 right-0 h-[60vh] flex flex-col items-center justify-center space-y-10 font-bold text-2xl ${menuSelect} transition-all duration-[0.5s]`}
        >
          <li>
            <a href="#">iPhone</a>
          </li>
          <li>
            <a href="#">Android</a>
          </li>
          <li>
            <a href="#">Help</a>
          </li>
          <li>
            <a href="#">Company</a>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Header;
