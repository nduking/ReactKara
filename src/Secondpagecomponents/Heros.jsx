import React from "react";
import Heading from "../components/mini-component/Heading";
import Content from "../components/mini-component/Content";

const Heros = () => {
  return (
    <section className="relative  bg-[url('/wave 1.svg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-#68D5851A"></div>
      <div className="grid grid-cols-2 px-[18px]">
        <div className="w-[70%]">
          <Heading
            className={`font-bold text-5xl w-[80%]`}
            headingText={`Find a dream job that changes life.`}
          />
          <p>With lots of unique blocks, you can easily build a page without coding. Build your next job website.</p>
        </div>
        <div className="">
            <img src="/blacklady.svg" alt="black-lady" />
        </div>
      </div>
    </section>
  );
};

export default Heros;
