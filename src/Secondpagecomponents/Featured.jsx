import React from "react";
import Heading from "../components/mini-component/Heading";
import Content from "./../components/mini-component/Content";
import { BiLeftArrowAlt } from "react-icons/bi";
import { BiRightArrowAlt } from "react-icons/bi";

const Featured = () => {
  return (
    <section className="border-t">
      <div className="grid items-center justify-center grid-cols-2 py-10 mx-36">
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
        <div className="flex items-center justify-end">
          <button className="flex flex-row rounded-sm bg-[#F4F7FA] px-4 py-2">
            <BiLeftArrowAlt />
            <BiRightArrowAlt />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-2 mx-36 mb-11 ">
        <div className="w-56 h-56 px-6 py-5 border rounded-md bg-white/50">
          <Heading
            className={`text-brainyGreen font-bold text-sm`}
            headingText={`Full-time`}
          />
          <Heading
            className={`text-brainyWaveBlack font-bold text-xl py-3`}
            headingText={`Senior Software Engineer`}
          />
          <p className="text-brainyWaveBlack/30 text-[15px]">New York, USA</p>
          <div className="flex items-center justify-start gap-2 mt-8">
            <img src="/D-Logo.svg" alt="D-logo" className="w-[32px] h-[33px]" />
            <p className="text-lg font-bold">Dorfus</p>
          </div>
        </div>
        <div className="w-56 h-56 px-6 py-5 border rounded-md bg-white/50">
          <Heading
            className={`text-brainyWavePurple font-bold text-sm`}
            headingText={`Full-time`}
          />
          <Heading
            className={`text-brainyWaveBlack font-bold text-xl py-3`}
            headingText={`Product Designer`}
          />
          <p className="text-brainyWaveBlack/30 text-[15px]">Lake Colby, UK</p>
          <div className="flex items-center justify-start gap-2 mt-8">
            <img src="/C-Logo.svg" alt="D-logo" className="w-[32px] h-[33px]" />
            <p className="text-lg font-bold">Coworks</p>
          </div>
        </div>
        <div className="w-56 h-56 px-6 py-5 border rounded-md bg-white/50">
          <Heading
            className={`text-brainyGreen font-bold text-sm`}
            headingText={`Full-time`}
          />
          <Heading
            className={`text-brainyWaveBlack font-bold text-xl py-3`}
            headingText={`UX Designer`}
          />
          <p className="text-brainyWaveBlack/30 text-[15px]">California, USA</p>
          <div className="flex items-center justify-start gap-2 mt-8">
            <img src="/A-Logo.svg" alt="D-logo" className="w-[32px] h-[33px]" />
            <p className="text-lg font-bold">Askimat</p>
          </div>
        </div>
        <div className="w-56 h-56 px-6 py-5 border rounded-md bg-white/50">
          <Heading
            className={`text-brainyGreen font-bold text-sm`}
            headingText={`Part-timer`}
          />
          <Heading
            className={`text-brainyWaveBlack font-bold text-xl py-3`}
            headingText={`Full-stack Web Developer`}
          />
          <p className="text-brainyWaveBlack/30 text-[15px]">
            Katlynburgh, Sweden
          </p>
          <div className="flex items-center justify-start gap-2 mt-8">
            <img src="/G-Logo.svg" alt="G-logo" className="w-[32px] h-[33px]" />
            <p className="text-lg font-bold">Greener</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
