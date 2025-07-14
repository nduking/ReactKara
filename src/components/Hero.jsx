import React from "react";
import Heading from "./mini-component/Heading";
import Button from "./mini-component/Button";

const Hero = () => {
  return (
    <section className="relative h-[580px] bg-[url('/Hero-bg.svg')] bg-cover bg-center">
      <div className="grid px-6 lg:grid-cols-2 lg:px-[16] mt-6">
        <div className="flex flex-col items-center mx-auto lg:items-start">
          <Heading
            className={"font-bold text-brainyWaveBlack text-4xl"}
            headingText={"Make your business powerful with Shade."}
          />
          <p className="text-[19px] text-brainyWaveBlack/60 mt-7">
            With lots of unique blocks, you can easily build a page without
            coding. Build your next consultancy website within few minutes.
          </p>
          <Button
            className={
              "bg-brainyWavePurple w-full text-white text-[17px] font-bold lg:w-[200px] py-3 mt-5 rounded-lg"
            }
            btnText={"Get A Free Quote"}
          />
          <span className="mt-6 font-bold ">Watch how we can help</span>
        </div>
        <div>
          <img src="/lady-longhair.svg" alt="hero ladylong hair" className="" />
        </div>
      </div>
      <div className="h-[96px] bg-brainyWaveBlack lg:w-[1400px]  flex items-center justify-center space-x-3 mx-auto w-full flex-col">
        <img src="/Hero-play-Icon.svg" alt="" />
        <p className="text-white">Interested how our software works for you?</p>
        <p className="text-white underline">Watch our 1 minute video</p>
      </div>
    </section>
  );
};

export default Hero;
