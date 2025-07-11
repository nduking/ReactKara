import React from "react";
import Heros from "../Secondpagecomponents/Heros";
import NavBar from "../Secondpagecomponents/NavBar";
import Infos from "../Secondpagecomponents/Infos";
import Category from "../Secondpagecomponents/Category";
import Find from "../Secondpagecomponents/Find";

const Secondpage = () => {
  return (
    <main>
      <NavBar />
      <Heros />
      <Infos/>
      <Category/>
      <Find/>
    </main>
  );
};

export default Secondpage;
