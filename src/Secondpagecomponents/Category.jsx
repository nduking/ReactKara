import React from "react";
import Heading from "../components/mini-component/Heading";
import Content from "../components/mini-component/Content";
import { Link } from "react-router-dom";
import Button from "../components/mini-component/Button";
import { BiRightArrowCircle } from "react-icons/bi";

const Category = () => {
  return (
    <section className="px-32 py-24 bg-brainyWaveBlack">
      <div className="grid items-center justify-between grid-cols-2 mb-11">
        <div className="w-[70%]">
          <Heading
            className={`text-3xl font-bold text-white py-5`}
            headingText={`Jobs by category`}
          />
          <Content
            className={`text-[18px] text-white flex justify-end items-end`}
            contentText={`With lots of unique blocks, you can easily build a page without coding.`}
          />
        </div>
        <div>
          <Button
            className={`text-[#68D585] text-[17px] font-bold`}
            btnText={`Explore all categories`}
          />
        </div>
      </div>
      <div className="flex flex-wrap gap-6">
        <div className="rounded-md bg-brainyWavePurple w-[300px] h-[100px]">
          <div className="flex flex-row items-center justify-between p-5">
            <div className="">
              <Heading
                className={`text-[21px] text-white font-semibold`}
                headingText={`Design`}
              />
              <Content className={`text-white`} contentText={`47 Jobs`} />
            </div>
            <div>
              <BiRightArrowCircle className="text-2xl" />
            </div>
          </div>
        </div>

        <div className="rounded-md bg-white w-[300px] h-[100px] p-5">
          <Heading
            className={`text-[21px] text-brainyWaveBlack font-semibold`}
            headingText={`Marketing`}
          />
          <Content
            className={`text-brainyWaveBlack/40`}
            contentText={`51 Jobs`}
          />
        </div>
        <div className="rounded-md bg-white w-[300px] h-[100px] p-5">
          <Heading
            className={`text-[21px] text-brainyWaveBlack font-semibold`}
            headingText={`Engineering`}
          />
          <Content
            className={`text-brainyWaveBlack/40`}
            contentText={`69 Jobs`}
          />
        </div>
        <div className="rounded-md bg-white w-[300px] h-[100px] p-5">
          <Heading
            className={`text-[21px] text-brainyWaveBlack font-semibold`}
            headingText={`Mangement`}
          />
          <Content
            className={`text-brainyWaveBlack/40`}
            contentText={`16 Jobs`}
          />
        </div>
        <div className="rounded-md bg-white w-[300px] h-[100px] p-5">
          <Heading
            className={`text-[21px] text-brainyWaveBlack font-semibold`}
            headingText={`Finance`}
          />
          <Content
            className={`text-brainyWaveBlack/40`}
            contentText={`23 Jobs`}
          />
        </div>
        <div className="rounded-md bg-white w-[300px] h-[100px] p-5">
          <Heading
            className={`text-[21px] text-brainyWaveBlack font-semibold`}
            headingText={`Customer Support`}
          />
          <Content
            className={`text-brainyWaveBlack/40`}
            contentText={`34 Jobs`}
          />
        </div>
      </div>
    </section>
  );
};

export default Category;
