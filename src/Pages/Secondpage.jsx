import React from "react";
import Heros from "../Secondpagecomponents/Heros";
import NavBar from "../Secondpagecomponents/NavBar";
import Infos from "../Secondpagecomponents/Infos";
import Category from "../Secondpagecomponents/Category";
import Find from "../Secondpagecomponents/Find";
import Featured from "../Secondpagecomponents/Featured";
import News from "../Secondpagecomponents/News";
import Updates from "../Secondpagecomponents/Updates";

const Secondpage = () => {
  return (
    <main>
      <NavBar />
      <Heros />
      <Infos />
      <Category />
      <Find />
      <Featured />
      <News />
      <Updates />
    </main>
  );
};

export default Secondpage;
