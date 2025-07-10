import React from "react";
import Heading from "../components/mini-component/Heading";
import Content from "../components/mini-component/Content";

const Heros = () => {
  return (
    <section className="min-h-screen bg-brainyWavePurple">
      <div className="grid grid-cols-2">
        <div>
          <Heading
            className={`font-bold`}
            headingText={`Find a dream job that changes life.`}
          />
          <Content
            className={`text-[19px]`}
            contentText={`With lots of unique blocks, you can easily build a page without coding. Build your next job website.`}
          />
        </div>
        <div>
            <img src="/blacklady.svg" alt="black-lady" />
        </div>
      </div>
    </section>
  );
};

export default Heros;
