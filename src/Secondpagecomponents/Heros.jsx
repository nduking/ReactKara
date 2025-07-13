import React from "react";
import Heading from "../components/mini-component/Heading";
import Content from "../components/mini-component/Content";
import Button from "../components/mini-component/Button";

const Heros = () => {
  return (
    <section className="relative  bg-[url('/wave 1.svg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-#68D5851A"></div>
      <div className="grid grid-cols-2 px-36">
        <div className="flex flex-col items-center w-[80%]">
          <Heading
            className={`font-bold text-5xl mt-8`}
            headingText={`Find a dream job that changes life.`}
          />
          <p className="text-brainyWaveBlack/30 text-[19px] mt-4">
            With lots of unique blocks, you can easily build a page without
            coding. Build your next job website.
          </p>
        </div>
        <div className="">
          <img src="/Ladygreen.png" alt="black-lady" />
        </div>
      </div>
      <div className="w-[730px] h-[138px] absolute top-64 left-32 rounded-lg bg-transparent mx-auto">
        <div className="bg-brainyWavePurple h-[95px] p-5 flex gap-3 mx-auto rounded-lg">
          <input
            type="search"
            placeholder="Job title or keyword"
            className="p-5 rounded-md w-[250px] h-[50px]"
          />
          <input
            type="search"
            placeholder="City"
            className="p-5 rounded-md w-[250px] h-[50px]"
          />
          <Button
            className={`bg-brainyWaveBlack rounded-md text-white w-[150px] h-[50px] text-[17px]`}
            btnText={`Search`}
          />
        </div>
        <p className="py-6 text-brainyWaveBlack/30">
          Try Product Designer, Software Engineer etc.
        </p>
      </div>
    </section>
  );
};

export default Heros;
