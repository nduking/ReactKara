import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/mini-component/Button";

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between px-12 py-10 h-11 flex-cols">
      <div className="font-rubik">
        <Link to="/" className="text-2xl font-bold">
          Brainwave.io
        </Link>
      </div>
      <div className="flex items-center justify-between space-x-6 flex-cols">
        <ul className="flex gap-2 space-x-5">
          <Link to="/" className="text-[#161C2D] font-bold text-[15px]">
            Demos
          </Link>
          <Link to="/" className="text-[#161C2D] font-bold [15px]">
            Pages
          </Link>
          <Link to="/" className="text-[#161C2D] font-bold [15px]">
            Support
          </Link>
          <Link to="/" className="text-[#161C2D] font-bold [15px]">
            Contact
          </Link>
        </ul>
      </div>
      <div className="flex items-center justify-between gap-3">
        <Button
          className={`py-2 px-4 rounded-lg text-brainyWaveBlack font-bold text-[15px]`}
          btnText={`Login`}
        />
        <Button
          className={`py-2 px-4 rounded-lg text-brainyWaveBlack font-bold text-[15px]`}
          btnText={`Sign up`}
        />
      </div>
    </nav>
  );
};

export default NavBar;
