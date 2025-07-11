import React from "react";
import Heros from "../Secondpagecomponents/Heros";
import NavBar from "../Secondpagecomponents/NavBar";
import Infos from "../Secondpagecomponents/Infos";

const Secondpage = () => {
  return (
    <main>
      <NavBar />
      <Heros />
      <Infos/>
    </main>
  );
};

export default Secondpage;
