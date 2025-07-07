import React from "react";
import Button from "./mini-component/Button";

const Navbar = () => {
  return (
    <nav>
      <div>
        <link>Brainwave.io</link>
      </div>
      <div>
        <ul>
          <link>Demos</link>
          <link>Pages</link>
          <link>Support</link>
          <link>Contact</link>
        </ul>
        <Button className={""} btnText={"Get A Free Quote"} />
      </div>
    </nav>
  );
};

export default Navbar;
