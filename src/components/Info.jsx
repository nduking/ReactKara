import React from "react";
import Heading from "./mini-component/Heading";
import Button from "./mini-component/Button";
import Content from "./mini-component/Content";

const Info = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 p-12 mt-[100px] lg:mb-[40px]">
      <div className="lg:h-[419px] flex flex-col justify-center">
        <Heading
          className={` text-xl lg:text-3xl font-bold lg:w-[90%]`}
          headingText={`Experienced experts are giving advices.`}
        />
        <p className="text-[#181f316c] text-lg py-5 w-[90%]">
          With lots of unique blocks, you can easily build a page without
          coding. Build your next landing page.
        </p>
        <Button
          className={`bg-brainyWavePurple text-white font-bold rounded-md p-2 px-4 w-[200px]`}
          btnText={`Learn how we work`}
        />
      </div>
      <div className="h-[419px] ">
        <img src="/info_IMG BG.svg" alt="info_section" className="p-2" />
      </div>
      <div className="h-[419px]">
        <div className="lg:mt-6 lg:w-[75%]">
          <Heading className={`text-3xl font-bold py-2`} headingText={"1M+"} />
          <Content
            className={`text-lg text-[#181f316c] font-normal`}
            contentText={
              "Customers visit Albino every month to get their service done."
            }
          />
        </div>
        <div className="lg:mt-6 lg:w-[75%]">
          <Heading className={`text-3xl font-bold py-2`} headingText={"92%"} />
          <Content
            className={`text-lg text-[#181f316c] font-normal`}
            contentText={"Satisfaction rate comes from our awesome customers."}
          />
        </div>
        <div className="lg:mt-6 lg:w-[75%]">
          <Heading
            className={`text-3xl font-bold py-2`}
            headingText={"4.9/5.0"}
          />
          <Content
            className={`text-lg text-[#181f316c] font-normal`}
            contentText={
              "Average customer ratings we have got all over internet."
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Info;
