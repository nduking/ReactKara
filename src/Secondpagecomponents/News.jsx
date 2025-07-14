import React from "react";
import Content from "./../components/mini-component/Content";
import Heading from "../components/mini-component/Heading";

const News = () => {
  //   const newsData = [
  //     {
  //       id: "1",
  //       newsImg: "/career.svg",
  //       newsTitle: "Career",
  //       newsHeading: "How to win any job you want. Get started with 5 steps.",
  //     },
  //     {
  //       id: "2",
  //       newsImg: "/lifestyle.svg",
  //       newsTitle: "Lifestyle",
  //       newsHeading: "10 ways to reduce your office work depression.",
  //     },
  //     {
  //       id: "3",
  //       newsImg: "/career-2.svg",
  //       newsTitle: "Career",
  //       newsHeading: "Why should you work as a team even on small projects.",
  //     },
  //   ];
  //   if (newsData.length === 0) {
  //     return (
  //       <div className="text-3xl font-bold text-red-700 capitalize min-h-[50vh] flex item-center justify-center">
  //         Please wait
  //       </div>
  //     );
  //   }
  //   if (!newsData) {
  //     <div className="text-3xl font-bold text-red-700 capitalize min-h-[50vh] flex item-center justify-center">
  //       Please try again later
  //     </div>;
  //   }
  return (
    <section className="bg-[#F4F7FA] py-16">
        <div className="bg-[#F4F7FA"></div>
      <div className="flex flex-col items-center justify-center">
        <h3 className="text-4xl font-bold leading-6 ">News that helps</h3>
        <p className="font-light text-[19px] w-[50%] flex items-center justify-center text-center mt-7">
          With lots of unique blocks, you can easily build a page without
          coding. Build your next landing page.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-8 mt-20 w-[70%] mx-auto rounded-md">
        <div className="bg-white rounded-md shadow-sm">
          <img src="/career.svg" alt="" className="mb-3 rounded-t-md" />
          <Content
            className={`px-5 mt-6 text-brainyWaveBlack/30`}
            contentText={`Career`}
          />
          <Heading
            className={`font-bold text-xl px-5 py-2`}
            headingText={`How to win any job you want. Get started with 5 steps.`}
          />
        </div>
        <div className="bg-white rounded-md shadow-sm">
          <img src="/lifestyle.svg" alt="" className="mb-3 rounded-t-md" />
          <Content
            className={`px-5 mt-6 text-brainyWaveBlack/30`}
            contentText={`Lifestyle`}
          />
          <Heading
            className={`font-bold text-xl px-5 py-2`}
            headingText={`10 ways to reduce your office work depression.`}
          />
        </div>
        <div className="bg-white rounded-md shadow-sm">
          <img src="/career-2.svg" alt="" className="mb-3 rounded-t-md" />
          <Content
            className={`px-5 mt-6 text-brainyWaveBlack/30`}
            contentText={`Careers`}
          />
          <Heading
            className={`font-bold text-xl px-5 py-2`}
            headingText={`Why should you work as a team even on small projects.`}
          />
        </div>
      </div>
    </section>
  );
};

export default News;
