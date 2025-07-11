import React from "react";
import Heading from "../components/mini-component/Heading";
import Content from "../components/mini-component/Content";

const Find = () => {
  return (
    <section className="flex flex-col items-center justify-center p-16">
      <div className="flex flex-col items-center justify-center w-[55%] space-y-6">
        <Heading
          className={`text-3xl font-bold text-brainyWaveBlack]`}
          headingText={`Find jobs with 3 easy steps`}
        />
        <Content
          className={`text-brainyWaveBlack/30 text-[19px] text-center`}
          contentText={`With lots of unique blocks, you can easily build a page without coding. Build your next landing page.`}
        />
      </div>
      <div className="grid grid-cols-2 gap-6 mt-16 px-28">
        <div>
          <img src="/redjacket.svg" alt="Red jacket" />
        </div>
        <div className="flex flex-col items-center justify-center gap-y-10">
          {/* 1 */}
          <div>
            <div className="flex gap-5 w-[85%]">
              <div className="rounded-full bg-brainyWavePurple w-[50px] h-[30px] flex items-center justify-center font-semibold text-white">
                1
              </div>
              <div>
                <Heading
                  className={`text-[21px] font-bold`}
                  headingText={`Search for a job`}
                />
                <Content
                  className={`text-[17px] text-brainyWaveBlack/30`}
                  contentText={`With lots of unique blocks, you can easily build a page without coding. `}
                />
              </div>
            </div>
          </div>
          {/* 2 */}
          <div>
            <div className="flex gap-5 w-[85%]">
              <div className="rounded-full bg-brainyWavePurple w-[50px] h-[30px] flex items-center justify-center font-semibold text-white">
                2
              </div>
              <div>
                <Heading
                  className={`text-[21px] font-bold`}
                  headingText={`Apply within our website`}
                />
                <Content
                  className={`text-[17px] text-brainyWaveBlack/30`}
                  contentText={`With lots of unique blocks, you can easily build a page without coding. `}
                />
              </div>
            </div>
          </div>
          {/* 3 */}
          <div>
            <div className="flex gap-5 w-[85%]">
              <div className="rounded-full bg-brainyWavePurple w-[50px] h-[30px] flex items-center justify-center font-semibold text-white">
                3
              </div>
              <div>
                <Heading
                  className={`text-[21px] font-bold`}
                  headingText={`Get interview call`}
                />
                <Content
                  className={`text-[17px] text-brainyWaveBlack/30`}
                  contentText={`With lots of unique blocks, you can easily build a page without coding. `}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Find;
