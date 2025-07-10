import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/mini-component/Button";

const NavBar = () => {
  return (
    <nav className="h-max w-max bg-brainyWavePurple">
      <div>
        <Link to="/">Brainwave.io</Link>
      </div>
      <ul>
        <Link to="/">Demos</Link>
        <Link to="/">Pages</Link>
        <Link to="/">Support</Link>
        <Link to="/">Contact</Link>
      </ul>

      <div>
        <Button
          className={`text-[15px] text-brainyWaveBlack font-bold`}
          btnText={"Login"}
        />
        <Button
          className={`text-[15px] text-brainyWaveBlack font-bold`}
          btnText={"Sign up"}
        />
      </div>
    </nav>
  );
};

export default NavBar;
