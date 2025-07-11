import React from "react";
import Heading from "../components/mini-component/Heading";
import Content from "../components/mini-component/Content";

const Infos = () => {
  return (
    <section className="flex flex-col items-center justify-center py-8">
      <div className="flex flex-col items-center justify-center py-8 mt-5">
        <Heading
          className={"text-3xl text-brainyWaveBlack font-bold"}
          headingText={"Big companies are here"}
        />
        <Content
          className={
            "text-[19px] text-brainyWaveBlack py-7 text-center w-[60%]"
          }
          contentText={
            "With lots of unique blocks, you can easily build a page without coding. Build your next consultancy website within few minutes. You have a business to run. Stop worring about cross-browser bugs, designing new pages."
          }
        />
      </div>
      <div className="flex flex-wrap items-center justify-center w-[60%] gap-12 mb-9">
        <img src="/Makeless.svg" alt="makeless logo" />
        <img src="/cowork.svg" alt="makeless logo" />
        <img src="/greener.svg" alt="makeless logo" />
        <img src="saastoday.svg" alt="makeless logo" />
        <img src="/dorfus.svg" alt="makeless logo" />
        <img src="/askit.svg" alt="makeless logo" />
      </div>
    </section>
  );
};

export default Infos;
