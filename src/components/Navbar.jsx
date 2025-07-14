import React from "react";
import { Link } from "react-router-dom";
import Button from "./mini-component/Button";
import { BiMenu } from "react-icons/bi";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-12 py-10 h-11 flex-cols">
      <div className="font-rubik">
        <Link to="/" className="text-2xl font-bold">
          Brainwave.io
        </Link>
      </div>
    <div className="hidden lg:block">
        <div className="flex items-center justify-between space-x-6 flex-cols">
        <ul className="flex gap-2 space-x-5">
          <Link to="/" className="text-[#161C2D] font-bold">
            Demos
          </Link>
          <Link to="/" className="text-[#161C2D] font-bold">
            Pages
          </Link>
          <Link to="/" className="text-[#161C2D] font-bold">
            Support
          </Link>
          <Link to="/" className="text-[#161C2D] font-bold">
            Contact
          </Link>
        </ul>
        <Button
          className={`bg-brainyWavePurple py-2 px-4 rounded-lg text-white font-bold text-[17px]`}
          btnText={"Get A Free Quote"}
        />
    </div>
      </div>
      <div className="block lg:hidden">
        <BiMenu className="text-4xl font-bold text-brainyWaveBlack" />
      </div>
    </nav>
  );
};

export default Navbar;
