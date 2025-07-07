import React from "react";
import Heading from "./mini-component/Heading";
import Button from "./mini-component/Button";
import { BiCheck } from "react-icons/bi";

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
        <div className="pt-5 mt-5">
          <img src="/Content.png" alt="" />
        </div>
        <div className="py-8 mt-10">
          <h3 className="text-3xl font-bold leading-10 t-10">
            Reasons you should choose us to grow today.
          </h3>
          <p className="text-[19px] font-[400] leading-8 text-[#161C2D]/50 mt-10">
            We share common trends and strategies for improving your rental
            income and making sure you stay in high demand.
          </p>
          <div className="grid h-3 grid-cols-2 mt-9 ">
            <div className="space-y-3">
              <div>
                <p className="flex items-center gap-2 text-[19px] font-bold">
                  <BiCheck className="text-[#473BF0] text-3xl font-semibold"/>
                  Fully Responsive
                </p>
              </div>
              <div>
                <p className="flex items-center gap-2 text-[19px] font-bold">
                  <BiCheck className="text-[#473BF0] text-3xl font-semibold"/>
                  Easy to Edit
                </p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="space-y-3">
                <p className="flex items-center gap-2 text-[19px] font-bold">
                  <BiCheck className="text-[#473BF0] text-3xl font-semibold" />
                  Beautiful Layouts
                </p>
              </div>
              <div>
                <p className="flex items-center gap-2 text-[19px] font-bold">
                  <BiCheck className="text-[#473BF0] text-3xl font-semibold" />
                  Google Font Included
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reasons;
