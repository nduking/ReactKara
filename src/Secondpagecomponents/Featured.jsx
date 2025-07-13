import React from "react";
import Heading from "../components/mini-component/Heading";
import Content from "./../components/mini-component/Content";
import { BiLeftArrowAlt } from "react-icons/bi";
import { BiRightArrowAlt } from "react-icons/bi";

const Featured = () => {
  return (
    <section>
      <div className="grid grid-cols-2">
        <div>
          <Heading
            className={`text-brainyWaveBlack text-4xl font-bold`}
            headingText={`Featured jobs`}
          />
          <p className="text-brainyWaveBlack/30">
            With lots of unique blocks, you can easily build a page without
            coding.
          </p>
        </div>
        <div>
          <button className="flex flex-row rounded-sm bg-[#F4F7FA] px-4 py-2">
            <BiLeftArrowAlt />
            <BiRightArrowAlt />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Featured;
