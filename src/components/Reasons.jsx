import React from "react";
import Heading from "./mini-component/Heading";
import Button from "./mini-component/Button";

const Reasons = () => {
  return (
    <section>
      {/* Reasons
      <Heading className="text-3xl font-bold" headingText={`Hello`} />
      <Button
        className={`bg-brainyWavePurple text-white text-x px-5 py-3 rounded-md`}
        btnText={`Resgister now`}
      /> */}
      <div className="grid grid-cols-2 px-40 ">
        <div className="pt-5">
        <img src="/Content.png" alt="" />
      </div>
      <div className="py-8 my-9">
        <h3 className="text-3xl font-bold leading-10 t-10">Reasons you should choose us to grow today.</h3>
        <p className="text-[19px] font-[400] leading-8 text-[#161C2D]/50 mt-10">
          We share common trends and strategies for improving your rental income
          and making sure you stay in high demand.
        </p>
      </div>
      </div>
    </section>
  );
};

export default Reasons;
